# Task Manager

Task Manager is a web application that provides personalized task management (to-do list) for each user. The project structure consists of a monorepo with two parts: the frontend, developed with Next.js, and the backend, developed with Laravel. MySQL database is used to store the tasks.

## Project Overview

Task Manager is a web application that allows users to create an account to have a unique and personalized environment for managing their tasks. With it, users can create, update, edit, and delete each task in an intuitive way.

## Technologies Used

- Next.js
- Laravel
- MySQL
- Docker
- Docker Compose

## Requirements

Before getting started, make sure you have the following requirements installed in your development environment:

- Node.js
- PHP
- Docker
- Docker Compose

## Configuration

The project consists of three services in the docker-compose.yml file:

- `frontend`: contains the client-side code developed with Next.js, running on port 3000.
- `backend`: contains the server-side code developed with Laravel, running on port 8000.
- `database`: contains the MySQL database, running on port 3306.

Make sure that ports 3000, 8000, and 3306 are available on your local machine before running the application.

## .env Files

In the `backend`, you will need to create a `.env` file to ensure the connection with the MySQL database.

```bash
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=admin
DB_PASSWORD=root
```

In the `frontend`, you will need to create a `.env.local` file containing the following information:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Make sure to configure the environment variables correctly. In the backend, the settings are necessary to establish the connection with MySQL, while in the frontend, they ensure the connection with the backend.


## Installation

1. Clone the project repository:

```bash
git clone https://github.com/luizgolima/full-stack-task-manager.git
```

2. Navigate to the cloned directory:

```bash
cd full-stack-task-manager
```

3. Run the following command to build and start the Docker containers defined in the `docker-compose.yml` file:

```bash
docker-compose up -d
```

4. Wait until the containers are created, and the services are up and running.

6. After the containers are created, the frontend will be accessible at `http://localhost:3000`, and the backend at `http://localhost:8000`.

## Running Migrations

To migrate the backend data to the database, you need to run the `php artisan migrate` command inside the "backend" service container. Here are the steps to perform this task:

1. First, open the terminal and run the `docker ps` command to list the running containers. Take note of the container name associated with the "backend" service.

```bash
docker ps
```

2. With the container name at hand, execute the command `docker exec -it <container_name> bash`, replacing <container_name> with the name of the container for the "backend" service. Here's an example:
   
```bash
docker exec -it task-manager-backend-1 bash 
```

3. This will allow you to enter the backend container. Now, run the `php artisan migrate` command to perform the Laravel migrations inside the container.
   
```bash
php artisan migrate
```

## Usage

1. After starting the containers, open your browser and access [http://localhost:3000](http://localhost:3000).

2. At the top, in the header, there will be an option to create an account and log in.

3. After creating an account, log in with your credentials.

4. You will be directed to the personalized task management page.

5. On the task management page, you can perform the following operations:

   - Create a new task: click on the "New Task" button and fill in the necessary information.
   - Update an existing task: select the desired task and make the necessary changes.
   - Mark a task as completed: click on the completion option next to the corresponding task.
   - Delete a task: click on the deletion button next to the corresponding task.

6. All changes to tasks are synchronized with the MySQL database.

## License

This project was created by [Luiz Lima](https://github.com/luizgolima) and is licensed under the [Licença MIT](LICENSE).


