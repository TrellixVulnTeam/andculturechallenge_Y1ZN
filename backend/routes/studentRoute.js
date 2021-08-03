const router = require('express').Router();
var Student = require('../models/studentModel');

router.route('/students').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const first = req.body.first;
    const last = req.body.last;
    const email = req.body.email;
    const age = Number(req.body.age);
    const grade = Number(req.body.grade);

    const newStudent = new Student({
        first,
        last,
        email,
        age,
        grade
    });

    newStudent.save()
        .then(() => res.json("Student added successfully"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/students/:id').get((req, res) => {
    Student.findById(req.params.id)
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/students/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(students => res.json("Student Deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.first = req.body.first;
            student.last = req.body.last;
            student.email = req.body.email;
            student.age = Number(req.body.age);
            student.grade = Number(req.body.grade);

            student.save()
                .then(() => res.json("Student updated successfully"))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;