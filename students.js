const fs=require('fs')

//Add Student



const addStudent = (id,name,degree,comment) =>{
    const student = loadStudents() 
    const duplicateStudent = student.filter((obj)=>{
       return obj.id === id
    })
    if(duplicateStudent.length == 0)
    {
    student.push({ 
        id:id,
        name:name,
        degree:degree,
        comment:comment 
    })
    saveStudents(student)
    console.log(student)
    console.log("Added Successfully")
   }  
   else{
       console.log("id is duplicated")
   }
//    const data = fs.readFileSync('student.json').toString()
   
//     const sum=0;
//     for(i=0;i<4;i++){
//      sum=sum+data.degree[i];
//      console.log('sum='+sum)
//     }


    // for(i=0;i<degree.length;i++){
    //  sum=sum+degree[i];
    //  console.log('sum='+sum)
    // }
    var sum=0;
    var y;
    degree.forEach((ele) => {
        // y=parseInt(ele);
        sum=sum+ele;
        
    })
    // console.log("sum" + sum)
    
//     var currentSearchResult = 'example'

// fs.readFile('student.json', function (err, data) {
//     var json = JSON.parse(data)
//     json.push('Total: ' + currentSearchResult)

//     fs.writeFile("student.json", JSON.stringify(json))

///////////////////////
var data = fs.readFileSync('student.json');
var myObject= JSON.parse(data);

let newData = {
    total: sum
}  
myObject.push(newData);

// Writing to our JSON file
var newData2 = JSON.stringify(myObject);
fs.writeFile("student.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("sum added");
});




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
        console.log(element.id + element.name)
    })
}











module.exports={
    addStudent,
    deleteStudent,
    readSTudent,
    listSTudents
}