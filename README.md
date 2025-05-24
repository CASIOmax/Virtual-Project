
# Virtual Project - Simple Notes App with Docker and Docker Compose

![App Screenshot](./screenshots/image.png)

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Setup Instructions](#setup-instructions)  
  - [Prerequisites](#prerequisites)  
  - [Clone Repository](#clone-repository)  
  - [Build and Run Containers](#build-and-run-containers)  
- [Using the Application](#using-the-application)  
- [Data Persistence](#data-persistence)  
- [Screenshots](#screenshots)  
- [Troubleshooting](#troubleshooting)  
- [Future Enhancements](#future-enhancements)  
- [Author](#author)  

---

## Project Overview

This project is a simple Notes application built with plain **HTML, CSS, and JavaScript** that allows users to create and save notes in the browser. The app is fully containerized using Docker and orchestrated with Docker Compose.

The main purpose of the project was to demonstrate how to containerize a static frontend app using Docker, and how Docker Compose can be used to manage multi-container setups and data persistence.

---

## Technologies Used

- **HTML, CSS, JavaScript** — For building the frontend Notes application  
- **Docker** — Containerizing the application  
- **Docker Compose** — Managing multi-container setups and volumes  
- **nginx** — Serving the static site inside a container  
- **Local Storage** — To persist notes data inside the browser  

---

## Project Structure

```plaintext
/
├── docker-compose.yml
├── Dockerfile
├── app/                     # Contains HTML, CSS, JS files
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── screenshots/
    ├── app-screenshot.png
    └── docker-compose-up.png
````

* `app/` folder contains the static frontend files (HTML, CSS, JS)
* `Dockerfile` defines how to build the Docker image serving the static files
* `docker-compose.yml` defines the service to run the app container and manage volumes

---

## Setup Instructions

### Prerequisites

* Docker installed: [Get Docker](https://docs.docker.com/get-docker/)
* Docker Compose installed (usually comes bundled with Docker Desktop)

---

### Clone the repository

```bash
git clone https://github.com/yourusername/virtual-project.git
cd virtual-project
```

---

### Build and Run Containers

Run the following command to build the Docker image and start the container:

```bash
docker-compose up --build
```

This will:

* Build the Docker image using the provided Dockerfile, which runs an nginx server to serve the static app
* Start the container and expose port `8080` to access the app via `http://localhost:8080`
* Mount a Docker volume (if configured) to persist any data if needed (optional for static apps)

---

## Using the Application

* Open your browser and visit: [http://localhost:8080](http://localhost:8080)
* Create notes using the simple UI
* Notes are saved in the browser’s localStorage and persist across reloads
* You can test the app even after restarting containers — your notes will still be there thanks to localStorage

---

## Data Persistence

Since this app is purely frontend, the notes are saved in the **browser's localStorage**. This means:

* Data persists locally on the client side even if the Docker container is stopped or restarted
* No backend or external database is required
* Docker mainly serves the static files via nginx inside a container

---

## Screenshots

### App Interface

![App Screenshot](./screenshots/app-screenshot.png)

### Docker Compose Running

![Docker Compose Up](./screenshots/docker-compose-up.png)

---

## Troubleshooting

* **Port 8080 in use?**
  Make sure no other services are occupying port 8080 on your machine.
* **Docker build errors?**
  Verify your Dockerfile and docker-compose.yml syntax.
* **App not loading?**
  Check container logs with `docker-compose logs` for errors.

---

## Future Enhancements

* Add backend API for notes storage (e.g., Node.js + Express + Database)
* Add user authentication and note sharing
* Implement sync across devices
* Add more UI/UX improvements (search, tags, categories)
* Deploy on cloud platforms (AWS, Azure, etc.)

---

## Author

Sajjad Ahmad
Email: [sajjad@example.com](mailto:sajjad@example.com)
GitHub: [https://github.com/yourusername](https://github.com/yourusername)

---

Thank you for reviewing this project!

```

---

Would you like me to help you create the **Dockerfile** and **docker-compose.yml** examples that fit this setup? Or help with polishing the app code or screenshots?
```
