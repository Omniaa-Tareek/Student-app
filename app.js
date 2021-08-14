// Require yargs
const yargs = require('yargs')

// Impoert modules
const student = require ('./notes')

// CRDU
// Add student
yargs.command({
    command: 'add',
    describe: 'Add student',
    builder: {
        id: {
            describe: 'This is id of student!',
            demandOption: true,
            type: 'number'
        },

        name: {
            describe: 'This is name of student!',
            demandOption: true,
            type: 'string'
        },

        grade: {
            describe: 'This is grade of student!',
            demandOption: true,
            type: 'number'
        },

        comment: {
            describe: 'This is comment about student!',
            type: 'string'
        }
    },
    handler: (argv) => {
        student.addStudent(argv.id,argv.name,argv.grade,argv.comment)
        console.log('Student has been saved!')
    }
})

// Read student
yargs.command({
    command: 'read',
    describe: 'Read student',
    builder: {
        id: {
            describe: 'This is id of student!',
            demandOption: true,
            type: 'number'
        },

        name: {
            describe: 'This is name of student!',
            demandOption: true,
            type: 'string'
        },

        grade: {
            describe: 'This is grade of student!',
            demandOption: true,
            type: 'number'
        },

        comment: {
            describe: 'This is comment about student!',
            type: 'string'
        }
    },
    handler: (argv) => {
        student.readStudent(argv.id)
    }
})

// Delete student
yargs.command({
    command: 'delete',
    describe: 'Delete student',
    builder: {
        id: {
            describe: 'This is id of student!',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        student.removeStudent(argv.id)
    }
})

// List student
yargs.command({
    command: 'list',
    describe: 'Display student list',
    builder: {
        id: {
            describe: 'This is id of student!',
            demandOption: true,
            type: 'number'
        },

        name: {
            describe: 'This is name of student!',
            demandOption: true,
            type: 'string'
        }   
    },
    handler: (argv) => {
        student.listStudent(argv.id,argv.name)
    }
})

// console.log(yargs.argv)
yargs.parse()