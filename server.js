const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Routes
const studentRoutes = require('./routes/students');
const enrollmentRoutes = require('./routes/enrollments');
const courseRoutes = require('./routes/courses');

app.use('/students', studentRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/courses', courseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));