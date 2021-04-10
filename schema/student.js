const mongoose = require('mongoose')
const schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
    serial: {
        type: Number
    },
    name: {
        type: String
    },
    class: {
        type: Number
    },
    rank: {
        type: Number
    }
})

const Student = mongoose.model('student', studentSchema);

module.exports = Student;