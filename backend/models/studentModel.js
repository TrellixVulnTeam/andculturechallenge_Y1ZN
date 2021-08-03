const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    first: {
        type: String
    },
    last: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number
    },
    grade: {
        type: Number
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;