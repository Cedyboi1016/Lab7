const express = require('express');
const sequelize = require('./config/database');

const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'API is running '});
});

// DB + Server start
sequelize.sync()
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch (err => console.error('DB error:', err));