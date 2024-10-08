# 🏫 Mern College ERP Project

**Streamline Your Academics, Strengthen Your Network**

## 📚 Overview

The Mern College ERP Project is a comprehensive web application designed to facilitate academic management for students, faculty, and administrators. The platform streamlines communication, profile management, and academic tracking, creating an efficient learning environment.

## ✨ Features

### Admin 
👮‍♂️ Responsible for managing users and overseeing the application.
- **Add Students and Faculty**: Easily add new students and faculty members to the system.
- **View All Users**: Access and manage the profiles of students and faculty.
- **Update User Information**: Modify user profiles as needed.

### Faculty
👩‍🏫 Engages with students and handles academic responsibilities.
- **Profile Management**: Update personal profile details and change passwords.
- **Attendance Tracking**: Record and update student attendance.
- **Marks Management**: Upload and update student marks for various subjects.

### Students
🎓 Participates in courses and accesses academic resources.
- **Profile Management**: Update personal profile details and change passwords.
- **View Subjects**: Access a list of enrolled subjects.
- **Attendance and Marks**: View attendance records and marks for each subject.
- **Search and Communicate**: Search for other students and communicate via messaging.

### Security:
🔒 Application Strength and User Security
- **Forgot Password**:OTP email verification for password reset (using NodeMailer)
- **JWT Handling**:JWT handling for session management
- **Password Security**:Passwords are hashed (12-character length hash strings) for enhanced security

## ⚙️ Tech Stack

- **Frontend:** React.js, Redux, Material-UI
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT for secure authentication
- **Mailing:** NodeMailer for OTP-based password recovery
- **Database:** MongoDB for managing data
- **File Handling:** Multer and Express for profile image uploads

## 🛠️ Installations and Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution)
- A working email account for sending OTPs using [NodeMailer](https://nodemailer.com/about/)

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/teja4848/Mern_College_ERP_Project.git
    ```

2. **Navigate into the project directory**

    ```bash
    cd Mern_College_ERP_Project
    ```

3. **Install backend dependencies**

    ```bash
    cd server
    npm install
    ```

4. **Install frontend dependencies**

    ```bash
    cd ../client
    npm install
    ```

5. **Set up environment variables**

    Create a `.env` file in the `server` directory with the following:

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/yourdbname

    NODEMAILER_USER=your_email@example.com
    NODEMAILER_PASS=your_email_password

    ADMIN_PASSWORD=admin123
    FACULTY_PASSWORD=faculty123
    STUDENT_PASSWORD=student123
    ```

    Replace the placeholder values with:

    - Your actual MongoDB connection string (`MONGODB_URI`).
    - Your email and password for sending OTPs via NodeMailer (`NODEMAILER_USER` and `NODEMAILER_PASS`).
    - The default passwords for the admin, faculty, and student accounts can be updated later as needed.

6. **Start the backend server**

    ```bash
    cd server
    npm start
    ```

7. **Start the frontend server**

    In a new terminal, run:

    ```bash
    cd client
    npm start
    ```

    Your backend will be running on `http://localhost:5000` and your frontend on `http://localhost:3000`.

## 📦 Folder Structure

```bash
Mern_College_ERP_Project/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── client/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── redux/
    │   └── App.js
    └── public/
```

## 🌐 Live Demo

Explore the Mern College ERP Project in action! 

👉 **Experience the live demo here**: [Live Demo Link](http://your-live-demo-link.com)

See how we’re transforming education through technology!

## 📩 Feedback and Support

I welcome your feedback! If you have any questions or suggestions, please feel free to reach out at [tejaanumolu70@gmail.com].

#### Thank you for checking out the Mern College ERP Project!!!!





