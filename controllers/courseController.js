const connection = require('../db');

exports.getAllCourses = (req, res) => {
  connection.query('SELECT * FROM Course', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getCourseByCode = (req, res) => {
  const code = req.params.code;
  connection.query('SELECT * FROM Course WHERE c_code = ?', [code], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0] || {});
  });
};

exports.createCourse = (req, res) => {
  const { c_code, course_name, credits, dep_id, semester_offered, year, quota, prof_id } = req.body;
  const query = `
    INSERT INTO Course (c_code, course_name, credits, dep_id, semester_offered, year, quota, prof_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  connection.query(query, [c_code, course_name, credits, dep_id, semester_offered, year, quota, prof_id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Course added', results });
  });
};

exports.updateCourse = (req, res) => {
  const code = req.params.code;
  const fields = req.body;
  connection.query('UPDATE Course SET ? WHERE c_code = ?', [fields, code], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Course updated', results });
  });
};

exports.deleteCourse = (req, res) => {
  const code = req.params.code;
  connection.query('DELETE FROM Course WHERE c_code = ?', [code], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Course deleted', results });
  });
};