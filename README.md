# MERN Student Management System

A full-stack Student Management System built using MERN stack.

## Features

- Add student
- View all students
- Edit student
- Delete student
- Search/filter students
- Clear search
- Attractive responsive UI
- MongoDB database connection

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

### Tools
- VS Code
- Thunder Client
- Git
- GitHub

## Student Fields

- Name
- Roll Number
- Email
- Phone
- Course
- Year
- Address

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/students | Add student |
| GET | /api/students | Get all students |
| PUT | /api/students/:id | Update student |
| DELETE | /api/students/:id | Delete student |

## Project Explanation

This project has a React frontend, Node.js and Express.js backend, and MongoDB Atlas database.

The frontend allows users to add, view, edit, delete, and search student records. Axios is used to send API requests from React to backend.

The backend provides REST APIs using Express.js. Mongoose is used to create the Student model and connect with MongoDB.

## How to Run Project

### Backend

```bash
cd backend
npm install
npm run dev
