# Portfolio Project

## Overview

This is a full-stack portfolio website built using **Vite** for the Frontend and **Golang** for the Backend. The project showcases various portfolio items, integrates a REST API, and is fully responsive for desktop and mobile devices.

## Live Demo

- **Frontend Deployment:** [https://bima-react-porto.vercel.app](https://bima-react-porto.vercel.app)
- **Backend API:** [bima-porto-production.up.railway.app](bima-porto-production.up.railway.app)

## Tech Stack

### **Frontend**

- Vite (React)
- SCSS
- Axios (API Calls)
- React Router

### **Backend**

- Golang (Gin Framework)
- PostgreSQL
- Railway (Deployment)

---

## Installation Guide

### **1. Clone the Repository**
## Front End
```sh
git clone https://github.com/bimadharma/react-porto.git
```
## Back End
```sh
git clone https://github.com/bimadharma/API-porto.git
```

### **2. Set Up the Backend**

#### **Install Go Modules**

```sh
go mod tidy
```

#### **Set Up Environment Variables**

Create a `.env` file in the backend directory:

```
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=your_port
DB_USER=your_db_user
```

#### **Run the Backend Server**

```sh
go run main.go
```

The backend should now be running at `http://localhost:8080`.

### **3. Set Up the Frontend**

#### **Install Dependencies**

```sh
npm install
```

#### **Start Development Server**

```sh
npm run dev
```

The frontend will be running at `http://localhost:5173`.

---

## API Endpoints

### **Certification**

- `GET /api/certificates` → Get certification
- `POST /api/certificates/update` → Post certification


### **Projects**

- `GET /api/projects` → Get projects
- `POST /api/projects/update` → Post projects

### **Projects**

- `GET /api/feedbacks` → Get projects
- `POST /api/feedbacks/update` → Post projects

---

## Deployment

### **Frontend Deployment to Vercel**

```sh
vercel
```

### **Backend Deployment to Railway**

```sh
git push railway main
```

---

## Contributing

Feel free to fork the repository and submit a pull request. Any contributions are welcome!

---

## Contact

- **GitHub:** [github.com/bimadharma](https://github.com/bimadharma)
- **Email:** [bimadharmayahya@gmail.com](bimadharmayahya@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/bima-dharma-yahya](https://www.linkedin.com/in/bima-dharma-yahya)


