___
# Chat Application

This is a chat application built using React, Appwrite, and Tailwind CSS. The application provides user authentication, real-time messaging, and other features to create a seamless chatting experience.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [License](#license)

## Features
- User Authentication with Appwrite
- Real-time messaging
- Responsive design using Tailwind CSS
- Modular component-based architecture
- Error handling and user feedback

## Project Structure

```
appwrite/
  ├── auth.js         # Handles authentication logic
  ├── config.js       # Appwrite configuration
  └── setup.js        # Initial setup for Appwrite

conf/
  └── conf.js         # Application configuration settings

public/
  ├── logo.png        # Application logo
  └── vite.svg        # Vite logo

src/
  ├── assets/         # Static assets (images, fonts, etc.)
  ├── components/     # React components
  │   ├── ChatMessage/
  │   ├── ChatRoom/
  │   ├── LinkdinComponents/
  │   ├── Login/
  │   ├── Navbar/
  │   ├── PageNotFound/
  │   ├── Register/
  │   └── UserList/
  ├── pages/          # Page components
  │   ├── ChatMessage.css
  │   ├── ChatMessage.jsx
  │   ├── HomePage.jsx
  │   ├── LinkdinClone.jsx
  │   └── SignupPage.jsx
  ├── store/          # Redux store and slices
  │   ├── authSlice.js
  │   └── store.js
  ├── App.jsx         # Main application component
  ├── index.css       # Global styles
  └── main.jsx        # Entry point of the application

.env                  # Environment variables
.eslintrc.cjs         # ESLint configuration
.gitignore            # Files and directories to ignore in Git
index.html            # Main HTML file
package-lock.json     # Lock file for npm
package.json          # Project metadata and dependencies
postcss.config.js     # PostCSS configuration
README.md             # Project documentation
server.js             # Node.js server setup
tailwind.config.js    # Tailwind CSS configuration
vite.config.js        # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Appwrite server

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anujkumarsagar/chat-Application.git
   cd chat-Application
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the following variables:
   ```plaintext
   VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT=your_appwrite_project_id
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

## Environment Variables

- `VITE_APPWRITE_ENDPOINT`: The endpoint URL of your Appwrite server.
- `VITE_APPWRITE_PROJECT`: The project ID of your Appwrite project.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Lint the codebase using ESLint.



---

