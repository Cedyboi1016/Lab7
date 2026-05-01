const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

//GET all courses
router.get('/', async  (req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

// CREATE course
router.post('/', async (req, res) => {
    const course = await Course.create(req.body);
    res.status(201).json(course);
});

module.exports = router;