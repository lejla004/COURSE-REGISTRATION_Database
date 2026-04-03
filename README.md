# Course Registration API

Welcome! This is a simple API for managing **students**, **courses**, and **enrollments** at a university.  
It’s built with **Node.js**, **Express**, and **MySQL**, and you can test it easily using **Postman**.

---

## Features

### Students
- Get all students or a single student by ID
- Add a new student
- Update student information
- Delete a student (note: foreign key constraints may prevent deletion if the student has enrollments)

### Courses
- Get all courses or a course by code

### Enrollments
- Get all enrollments with student and course info
- Add a new enrollment
- Update enrollment details
- Delete an enrollment

---

## Setup

1. **Clone this repository**

```bash
git clone https://github.com/lejla004/COURSE-REGISTRATION_Database.git
cd COURSE-REGISTRATION_Database

2. **Install dependencies**
npm install


3.**Create a .env file in the project root with your database credentials:**
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=courseregistration
PORT=3000

4. **Start the server**
node server.js


## Testing with Postman – Step by Step

You can use **Postman** to explore and test the API. Here's a simple guide:

---

### 1. Install Postman
- Download Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
- Install and open the application.

---

### 2. Create a New Collection
1. Click **Collections** on the left panel.
2. Click **+ New Collection**.
3. Name it something like `Course Registration API`.
4. (Optional) Add a description: `Collection of requests to test students, courses, and enrollments endpoints`.

---

### 3. Add Requests
For each API endpoint, create a request in the collection:

#### Example: Get all students
- Click **Add Request** in your collection.
- Name it `Get All Students`.
- Method: `GET`
- URL: `http://localhost:3000/students`
- Click **Save** to your collection.

#### Example: Add a new student
- Method: `POST`
- URL: `http://localhost:3000/students`
- Go to **Body → raw → JSON** and enter:

```json
{
  "name": "Lejla",
  "last_name": "Kukuruzovic",
  "email": "lejla@example.com",
  "dob": "2005-04-01",
  "dor": "2023-09-01",
  "faculty": "Computer Science",
  "dep_id": 1
}

