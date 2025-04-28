# Inventory Management System

This is a simple Inventory Management System built using:
- Frontend: Angular 17 (Standalone Components)
- Backend: ASP.NET Core 8 Web API
- Database: SQL Server

## Features

- Manage Products (Add, Edit, Delete, List)
- Record Sales (Decrease inventory quantity)
- Record Purchases (Increase inventory quantity)

## Technologies Used

- Angular 17 (Standalone Components)
- ASP.NET Core 8 Web API
- SQL Server
- Entity Framework Core
- Bootstrap 5 (for UI)

## Folder Structure

InventoryManagementSystem/ ├── InventoryManagementAPI/ (Backend - ASP.NET Core API) 
├── inventory-management-frontend/ (Frontend - Angular app) └── InventoryManagementSystem.sln (Solution file)



## How to Run the Project

### Backend (.NET Core API)

1. Open `InventoryManagementAPI` project in Visual Studio 2022.
2. Update your database connection string inside `appsettings.json`.
3. Open Package Manager Console and run:
    ```
    update-database
    ```
   to apply migrations and create database.
4. Press `F5` to run the API. Swagger should open at `https://localhost:7064/swagger/index.html`.

### Frontend (Angular)

1. Open terminal inside `inventory-management-frontend` folder.
2. Install dependencies:
    ```
    npm install
    ```
3. Run the Angular app:
    ```
    ng serve --open
    ```
4. The app will open automatically at `http://localhost:4200` (or another port if 4200 is busy).

## Important Notes

- CORS policy has been enabled for local development.
- Make sure both backend and frontend are running together.
- SQL Server should be installed locally and connection string should match your server instance.

## Author

Developed by Syed Abdul Rafay
