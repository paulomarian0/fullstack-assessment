Sure! Here's the updated version of the README in English with the additional section explaining how to run the project:

---

# Fullstack Assessment - Software Mind

## Introduction

This project was developed as part of a fullstack assessment for the company *Software Mind*. The goal was to build a robust application that demonstrates proficiency in both backend and frontend development, while adhering to clean architecture principles and best practices in software development.

## Database Design

The database schema was designed using [Prisma](https://www.prisma.io/), an ORM (Object-Relational Mapper) that allows for easy and efficient interaction with the database. Below is the database diagram showcasing the relationships and structure of the database.

![image](https://github.com/user-attachments/assets/659501e1-2873-41a8-910e-cbc0fbc4aa75)

## Backend

For the backend, I utilized **Next.js** with the **App Router** and focused on server-side application routing. The project is organized using **Clean Architecture** principles, which includes clear separations of concerns such as:

- **Controllers**: Handling HTTP requests and responses.
- **Services**: Encapsulating the business logic.
- **Use-Cases**: Representing specific application functionalities.
- **Repositories**: Managing data access and interaction with the database.

This structure ensures maintainability, scalability, and flexibility in the project.

## Frontend

The frontend was also built with **Next.js** using the **App Router**. I employed **Tailwind CSS** for a fast and responsive design, ensuring the application is visually appealing and accessible across all screen sizes. Additionally, **TypeScript** was used across the entire codebase to ensure type safety and a better development experience.

## How to Run the Project

To run the project locally, follow these steps:

1. **Clone the repository**:
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/paulomarian0/fullstack-assessment.git
   ```

2. **Set up environment variables**:
   Copy the `.env.example` file to a new `.env` file:
   ```bash
   cp .env.example .env
   ```

3. **Install dependencies**:
   Navigate to the project folder and install the required dependencies:
   ```bash
   npm install
   ```

4. **Generate Prisma files**:
   Run the following command to generate the necessary Prisma files:
   ```bash
   npx prisma generate
   ```

5. **Push the database schema**:
   To apply the migrations and set up the database, run:
   ```bash
   npx prisma db push
   ```

6. **Start the server**:
   After configuration, start the development server by running:
   ```bash
   npm run dev
   ```

7. **Access the application**:
   Once the server is running, open your browser and go to the following URL:
   ```bash
   http://localhost:3000
   ```

This will get the project running locally in your development environment. If you need further assistance, refer to the Prisma documentation or the application's own documentation for more details.

## Conclusion

I would like to thank *Software Mind* for the opportunity to showcase my skills and knowledge through this fullstack assessment. It was an invaluable learning experience, and I hope the project reflects my passion for clean, efficient, and well-structured code.

