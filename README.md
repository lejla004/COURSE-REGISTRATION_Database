# Course Registration API

A RESTful API for managing **students**, **courses**, and **enrollments** at a university.
Built with **Node.js**, **Express**, and **MySQL**.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- MySQL database
- [Postman](https://www.postman.com/downloads/) (optional, for testing)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/lejla004/COURSE-REGISTRATION_Database.git
cd COURSE-REGISTRATION_Database
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=courseregistration
PORT=3000
```

**4. Start the server**
```bash
node server.js
```

The API will be running at `http://localhost:3000`.

---

## API Endpoints

## Testing with Postman

### Setup

1. Download and install [Postman](https://www.postman.com/downloads/).
2. Open Postman and click **Collections → + New Collection**.
3. Name it `Course Registration API`.

GET http://localhost:3000/students
#### Add a New Student

POST http://localhost:3000/students
Content-Type: application/json
Request body:
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
```

In Postman: go to **Body → raw → JSON**, paste the above, and click **Send**.

---




## License

This project is for educational purposes.
