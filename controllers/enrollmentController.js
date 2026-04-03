const connection = require('../db');

exports.getAllEnrollments = (req, res) => {
  const query = `
    SELECT e.*, s.name AS student_name, s.last_name AS student_lastname, c.course_name
    FROM Enrollment e
    JOIN Student s ON e.student_id = s.stud_id
    JOIN Course c ON e.course_code = c.c_code
  `;
  connection.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getEnrollmentById = (req, res) => {
  const enrollmentId = req.params.id;
  const query = `
    SELECT e.*, s.name AS student_name, s.last_name AS student_lastname, c.course_name
    FROM Enrollment e
    JOIN Student s ON e.student_id = s.stud_id
    JOIN Course c ON e.course_code = c.c_code
    WHERE e.enrollment_id = ?
  `;
  connection.query(query, [enrollmentId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0] || {});
  });
};

exports.createEnrollment = (req, res) => {
  const { student_id, course_code, prof_id, grade_point, year } = req.body;
  const query = 'INSERT INTO Enrollment (student_id, course_code, prof_id, grade_point, year) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [student_id, course_code, prof_id, grade_point, year], (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Enrollment added', results });
  });
};

exports.updateEnrollment = (req, res) => {
  const enrollmentId = req.params.id;
  const fields = req.body;
  connection.query('UPDATE Enrollment SET ? WHERE enrollment_id = ?', [fields, enrollmentId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Enrollment updated', results });
  });
};

exports.deleteEnrollment = (req, res) => {
  const enrollmentId = req.params.id;
  connection.query('DELETE FROM Enrollment WHERE enrollment_id = ?', [enrollmentId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Enrollment deleted', results });
  });
};