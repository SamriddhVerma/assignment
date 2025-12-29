# School Directory Web Application

This project is a mini-project for Reno Platforms, built using Next.js and MySQL. It consists of two main pages: one to add new school data and another to display the list of schools.

You can view the live demo of the project [https://reno-platforms.up.railway.app/](https://reno-platforms.up.railway.app/).

## Features

- Add new schools with details like name, address, city, state, contact, email, and an image.
- View a list of all schools in a card-based layout.
- Form validation for user inputs.
- Images are uploaded and stored locally in the `public/schoolImages` folder.
- Responsive design for both mobile and desktop views.

## Pages

### 1. Add School (`/add`)

- A form to input the details of a new school.
- Built using `react-hook-form` for form management and validation.
- On submission, the school's data is saved to the MySQL database, and the image is saved to the server.

### 2. Show Schools (`/`)

- Displays a list of all schools from the database.
- Each school is displayed as a card showing its image, name, address, and city.
- The layout is responsive and adjusts to different screen sizes.

## Database Schema

The project uses a MySQL database with a single table named `schools`.

**`schools` table:**

| Field    | Type         | Description                       |
| -------- | ------------ | --------------------------------- |
| id       | INT          | Auto-increment primary key        |
| name     | VARCHAR(511) | Name of the school                |
| address  | VARCHAR(511) | Address of the school             |
| city     | VARCHAR(255) | City where the school is located  |
| state    | VARCHAR(100) | State where the school is located |
| contact  | BIGINT       | Contact number of the school      |
| image    | VARCHAR(511) | Filename of the school's image    |
| email_id | VARCHAR(255) | Email address of the school       |

## Live Demo

You can view a live demo of the project here: [Link to hosted project]

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MySQL (version 5.7 or higher)
- Git

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/SamriddhVerma/assignment
   ```

2. Navigate to the project directory:

   ```bash
   cd assignment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the database:

   - Create a MySQL database.
   - Import the provided SQL schema located in the `mysql.sql` file.

5. Configure the database connection:

   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     MYSQL_DATABASE=your_database_name
     MYSQL_USER=your_username
     MYSQL_PASSWORD=your_password
     MYSQL_HOST=your_host
     MYSQL_PORT=your_port
     ```

6. Start the application:

   ```bash
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the application.
