const Student = require('../models/Student')

// GET all students
exports.getStudents = async (req, res) => {
    console.log("GET /students hit");
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
};

// CREATE student
exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: err. message})
    }
}; 

// UPDATE student
exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.update(req.body, { where: { id }});
        res.json({ message: 'Student updated'});
    } catch (err) {
        res.status(500).json({ error: err. message})
    }
}; 

// DELETE student
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.destroy({ where: { id }});
        res.json({ message: 'Student deleted'});
    } catch (err) {
        res.status(500).json({ error: err. message})
    }
}; 
