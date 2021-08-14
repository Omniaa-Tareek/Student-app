// Require fileSystem
const fs = require('fs')

// Add student 
const addStudent = (id, name, grade, comment) => {
    const student = loadStudents()

    const duplicateID = student.filter((student) => {
        return student.id === id
    })

    if (duplicateID.length === 0) {
        student.push({

            id: id,
            name: name,
            grade: grade,
            comment: comment

        })
        saveStudents(student)
    } else {
        console.log('Error Duplicate id') 
    }
}


// Read data from file
const loadStudents = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    } 
    
    catch (e) {
        return []
    }
}

// Save students
const saveStudents = (student) => {
    // Convert to json
    const saveData = JSON.stringify(student)
    fs.writeFileSync('studentsData.json', saveData)
}


// Remove student 
const removeStudent = (id) =>{
    const student = loadStudents()
    const studentToKeep = student.filter((student)=>{
        return student.id !== id
    })
    saveStudents(studentToKeep)
    console.log(studentToKeep)
}



// Read students
const readStudent = (id) =>{
    const student = loadStudents()
    const student = student.find((student)=>{
        return student.id === id
    })

    if(student){
        console.log(student)
        console.log(student.id)
        console.log(student.name)
        console.log(student.grade)
        console.log(student.comment)
    }
}

// List students
const listStudent = () =>{
    const student = loadStudents()
    student.forEach((student) =>{return console.log(student)})
}

module.exports = {
    addStudent: addStudent ,
    removeStudent: removeStudent,
    readStudent: readStudent ,
    listStudent: listStudent
}