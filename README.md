# Quiz Web App - Test Your Knowledge

A modern, interactive quiz application built with Node.js/Express backend and vanilla HTML/CSS/JavaScript frontend. Users can register, login, and take quizzes on various topics while tracking their scores.

## 🚀 Features

- **User Authentication**: Secure registration and login system
- **Multiple Quiz Topics**: Various subjects including Operating Systems, Computer Networks, and more
- **Score Tracking**: Automatic score saving and history
- **Responsive Design**: Modern UI with smooth animations
- **Real-time Feedback**: Immediate score submission and feedback
- **Session Management**: Persistent login state using localStorage

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Interactivity
- **jQuery** - DOM manipulation
- **Bootstrap Icons** - UI icons
- **Ionicons** - Additional icons

## 📁 Project Structure

```
Quiz Web App/
├── backend/
│   ├── controller/
│   │   └── user.controller.js    # User authentication and score logic
│   ├── model/
│   │   └── user.model.js         # MongoDB user schema
│   ├── route/
│   │   └── user.route.js         # API routes
│   ├── index.js                  # Server entry point
│   ├── package.json              # Backend dependencies
│   └── .env                      # Environment variables (create this)
└── Online-Quiz-website-test-your-knowledge-/
    ├── images/                   # Static images
    ├── *.html                    # Quiz pages
    ├── *.js                      # Quiz logic and authentication
    ├── *.css                     # Styling
    └── index.html                # Main entry point
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Quizz Web App"
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `backend` directory:
   ```env
   MongoDBURI=your_mongodb_connection_string
   PORT=4001
   ```
   
   **For MongoDB Atlas:**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Get your connection string
   - Replace `your_mongodb_connection_string` with your actual MongoDB URI

   **For Local MongoDB:**
   ```env
   MongoDBURI=mongodb://localhost:27017/quiz-app
   PORT=4001
   ```

4. **Start the Backend Server**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:4001`

5. **Open the Frontend**
   - Navigate to `Online-Quiz-website-test-your-knowledge-/`
   - Open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (install http-server globally)
     npx http-server -p 8000
     ```

## 📖 Usage

### First Time Setup

1. **Register a New Account**
   - Click the "Login" button on the homepage
   - Click "Register" to switch to registration form
   - Fill in your details:
     - Username
     - Email address
     - Password
   - Click "Register"

2. **Login**
   - Use your registered email and password
   - Click "Login"

### Taking Quizzes

1. **Select a Topic**
   - Click "Topics" in the navigation
   - Choose from available quiz categories:
     - Operating Systems (OS1, OS2, OS3)
     - Computer Networks (CN1, CN2, CN3)
     - Web Development (HTML/CSS/JavaScript)

2. **Complete the Quiz**
   - Read each question carefully
   - Select your answer
   - Navigate through questions using "Next" and "Previous"
   - Submit your quiz when finished

3. **View Results**
   - Your score will be automatically saved
   - You'll receive immediate feedback
   - Scores are stored in your account history

## 🔧 API Endpoints

### Authentication
- `POST /user/signup` - Register new user
- `POST /user/signin` - User login

### Quiz Management
- `POST /user/saveQuizScore` - Save quiz score

## 🎯 Quiz Topics

### Operating Systems
- **OS1**: Basic OS concepts, system calls, kernel
- **OS2**: Process management, scheduling
- **OS3**: Advanced OS topics

### Computer Networks
- **CN1**: Network fundamentals
- **CN2**: Protocols and layers
- **CN3**: Advanced networking

### Web Development
- **HTML/CSS/JavaScript**: Frontend technologies

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **Error Handling**: Comprehensive error handling and user feedback

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

**Happy Quizzing! 🎉** 