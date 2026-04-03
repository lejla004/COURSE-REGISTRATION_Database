const connection = require('../db');

exports.getAllStudents = (req, res) => {
  connection.query('SELECT * FROM Student', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getStudentById = (req, res) => {
  const studentId = req.params.id;
  connection.query('SELECT * FROM Student WHERE stud_id = ?', [studentId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0] || {});
  });
};

exports.createStudent = (req, res) => {
  const { name, last_name, email, dob, dor, faculty, dep_id } = req.body;
  connection.query(
    'INSERT INTO Student (name, last_name, email, dob, dor, faculty, dep_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [name, last_name, email, dob, dor, faculty, dep_id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: 'Student added', student_id: results.insertId });
    }
  );
};

exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  const fields = req.body;
  connection.query('UPDATE Student SET ? WHERE stud_id = ?', [fields, studentId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Student updated', results });
  });
};

exports.deleteStudent = (req, res) => {
  const studentId = req.params.id;
  connection.query('DELETE FROM Student WHERE stud_id = ?', [studentId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Student deleted', results });
  });
};