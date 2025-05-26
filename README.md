# Notes App Project – Docker-Based Full Stack Application

## Project Team

```
Sajjad Ahmad
ITS-11072

Saad Sarwar
ITS-11068

Umair Hanif
ITS-11058
```

## Overview

This project is a **Notes App** developed using a static frontend (HTML/CSS/JS), a **Node.js backend**, and a **MySQL database**, all containerized with **Docker** and managed using **Docker Compose**. It demonstrates:

* Multi-container orchestration
* Docker image creation
* Service separation
* Persistent storage with volumes


## Project Structure

```
project-root/
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── public/
│       └── index.html
├── docker-compose.yml
├── init.sql
└── README.md
```

<p align="center">
  <img src="./screenshots/project-structure.png" alt="Centered Image" />
</p>

## Technologies Used

* Node.js (Backend API)
* MySQL 8.0 (Database)
* Docker (Containerization)
* Docker Compose (Service orchestration)
* HTML, CSS, JavaScript (Frontend)
* cURL (API testing)


## Architecture

```
Frontend (HTML/JS)
        ↓
Node.js Backend (API & Static File Server)
        ↓
MySQL Database (Data Storage)
```

Each service runs in its own Docker container, connected via Docker Compose.


## Backend Dockerfile

**Path:** `backend/Dockerfile`

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["node", "index.js"]
```

This builds the backend service image and sets it to run on port 5000.


## Docker Compose Configuration

**Path:** `docker-compose.yml`

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mysql
    environment:
      DB_HOST: mysql
      DB_USER: root
      DB_PASSWORD: password
      DB_NAME: notesdb

  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: notesdb
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

### Services Breakdown

| Service | Description                           |
| ------- | ------------------------------------- |
| backend | Node.js API & frontend file server    |
| mysql   | MySQL database with persistent volume |


## Commands

### Build and Start the App

```bash
docker-compose up --build
```

<p align="center">
  <img src="./screenshots/docker-up.png" alt="Centered Image" />
</p>


### Verify Running Containers

```bash
docker ps
```

<p align="center">
  <img src="./screenshots/docker-ps.png" alt="Centered Image" />
</p>

---

### Stop Services

```bash
docker-compose down
```

Stops containers but keeps volumes (notes remain saved).

---

### Clean Up Completely (Remove Containers and Volumes)

```bash
docker-compose down -v
```

## API Testing

### Open in Browser

[http://localhost:5000](http://localhost:5000)
(Loads the frontend from `public/index.html`)

<p align="center">
  <img src="./screenshots/image.png" alt="Centered Image" />
</p>

---

### Test API with `curl`

#### Fetch All Notes

```bash
curl http://localhost:5000/api/notes
```

<p align="center">
  <img src="./screenshots/api-get-notes.png" alt="Centered Image" />
</p>


## Volumes and Persistence

The volume `db_data` ensures that data is stored even if the container is removed. Restarting the app will restore all saved notes.

To view volumes:

```bash
docker volume ls
```

<p align="center">
  <img src="./screenshots/docker-volum-ls.png" alt="Centered Image" />
</p>


## Learning Outcomes

* Created a Dockerized Node.js backend
* Served static frontend from the backend
* Connected backend to MySQL using Docker Compose
* Ensured data persistence via Docker volumes
* Tested APIs using browser and `curl`
* Understood service dependencies and inter-container networking


## GitHub Repository

[https://github.com/CASIOmax/Virtual-Project](https://github.com/CASIOmax/Virtual-Project)