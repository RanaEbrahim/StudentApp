const student = require('./students')
const yargs = require('yargs')

//Add student

yargs.command({
    command:'add',
    describe:'Adding Student',
    builder:{
        id:{
            describe:'student id',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'student name',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'student degrees',
            demandOption:true,
            type:'array'
        },
        comment:{
            describe:'student id',
            type:'string'
        },
        sum:{
            
        }

    },
    handler:(x)=>{
        student.addStudent(x.id,x.name,x.degree,x.comment)
    }

})
//Delete student

yargs.command({
    command:'delete',
    describe:'Delete Student',
    builder:{
        id:{
            describe:'student id',
            demandOption:true,
            type:'number'
        }

    },
    handler:(x)=>{
        student.deleteStudent(x.id)
    }

})

//Read student

yargs.command({
    command:'read',
    describe:'Read Student',
    builder:{
        id:{
            describe:'student id',
            demandOption:true,
            type:'number'
        }

    },
    handler:(x)=>{
        student.readSTudent(x.id)
    }

})

//List students

yargs.command({
    command:'list',
    describe:'list Students',
    handler:()=>{
        student.listSTudents()
    }

})





yargs.parse()