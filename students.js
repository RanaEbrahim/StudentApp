const fs=require('fs')

//Add Student



const addStudent = (id,name,degree,comment) =>{
    const student = loadStudents() 

    var sum=0;
    
    degree.forEach((ele) => {
        sum=sum+ele;
        
    })



    const duplicateStudent = student.filter((obj)=>{
       return obj.id === id
    })
    if(duplicateStudent.length == 0)
    {
    student.push({ 
        id:id,
        name:name,
        degree:degree,
        comment:comment ,
        total:sum
    })
    saveStudents(student)
    console.log(student)
    console.log("Added Successfully")
   }  
   else{
       console.log("id is duplicated")
   }

}
    
const loadStudents=() =>{
    try{
        const databuffer=fs.readFileSync('student.json').toString()
        return JSON.parse(databuffer)
    } catch{
        return[]
    }

}

const saveStudents=(student) =>{
    const saveData=JSON.stringify(student)
    fs.writeFileSync('student.json',saveData)

}

//Delete Student
const deleteStudent=(id) =>{
    const students=loadStudents()

    const student=students.find((obj) =>{
        return  obj.id==id    
    })
    if(student){
        const studentsToKeep=students.filter((obj)=>{
            return obj.id !== id
        })
        console.log(studentsToKeep)
        saveStudents(studentsToKeep)
        console.log("Student Deleted")
    
    }else{
        console.log('This id is not found')
    }
}

    

//Read Student

const readSTudent=(id) =>{
    const students=loadStudents()
    const student=students.find((obj) =>{
        return  obj.id==id    
    })
    if(student){
        console.log(student.id,student.name)
    }else{
        console.log('This student is not found')
    }
}

//List Student

const listSTudents=() =>{
    const students=loadStudents()
    students.forEach((element) =>{
        console.log(element.id , element.name)
    })
}




module.exports={
    addStudent,
    deleteStudent,
    readSTudent,
    listSTudents
}




