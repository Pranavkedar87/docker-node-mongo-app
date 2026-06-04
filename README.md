# Docker Node Mongo App

A containerized Node.js, Express, and MongoDB application built with Docker and Docker Compose, featuring Mongo Express for database management and demonstrating multi-container deployment.

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongo Express
- Docker
- Docker Compose
- HTML
- CSS

---

## 📁 Project Structure

```text
docker-node-mongo-app/
├── public/
│   ├── index.html
│   └── style.css
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🐳 Containers

This project uses three containers:

1. **node-app** - Node.js & Express application
2. **mongo** - MongoDB database
3. **mongo-express** - MongoDB web interface

---

## ⚙️ Run the Project

### Build and Start Containers

```bash
docker compose up -d --build
```

### Check Running Containers

```bash
docker ps
```

### Stop Containers

```bash
docker compose down
```

---

## 🌐 Access the Application

### Node.js Application

```text
http://localhost:8080
```

### Mongo Express

```text
http://localhost:8081
```

Login Credentials:

```text
Username: admin
Password: pass
```

---

## 🗄️ Database Configuration

MongoDB runs inside a Docker container and is connected to the Node.js application through Docker Compose networking.

Connection String:

```javascript
mongodb://admin:qwerty@mongo:27017/admin
```

---

## 📌 Features

- Add student data using a web form
- Store data in MongoDB
- Retrieve stored data using API endpoints
- Manage database using Mongo Express
- Multi-container deployment with Docker Compose

---

## 📡 API Endpoints

### Get All Users

```http
GET /getUsers
```

### Add User

```http
POST /addUser
```

---

## 👨‍💻 Author

**Pranav Kedar**

GitHub: https://github.com/Pranavkedar87

---

## 📜 License

This project is for learning and educational purposes.
