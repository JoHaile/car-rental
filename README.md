# Car Rental Web App

A full-stack car rental platform built with Next.js, PostgreSQL, Prisma, and a component-driven UI. The application supports customer authentication, vehicle browsing, rental bookings, and an admin dashboard for managing the rental operation.

## Overview

The project models a complete rental workflow around users, vehicles, vehicle specifications, availability, and bookings. Customers can browse available cars and submit rental requests, while administrators can manage the operational side through a protected dashboard.

## Features

- Vehicle catalog and car-detail experience
- Availability-aware rental workflow
- Customer signup and authentication
- Role-based access for customers and administrators
- Booking creation and management
- Rental status tracking
- Admin dashboard
- Vehicle specifications such as type, fuel, transmission, seating, mileage, and engine power
- Transactional email integration
- Responsive UI with reusable components
- PostgreSQL relational data model

## Tech Stack

- **Framework:** Next.js 15, React 19, TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** Better Auth
- **UI:** Tailwind CSS, Radix UI, Lucide
- **Forms & Validation:** React Hook Form, Zod
- **Data & Charts:** Recharts
- **Email:** Nodemailer
- **Media:** next-cloudinary
- **Internationalization:** next-intl
- **Notifications:** Sonner

## Data Model

The core relational model includes:

- **Users** with Customer/Admin roles
- **Cars** with pricing, availability, mileage, images, and specifications
- **Features** for vehicle specifications
- **Bookings** linked to cars and users
- **Sessions, accounts, and verification records** for authentication

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/JoHaile/car-rental.git
cd car-rental
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the environment variables required by the application, including the PostgreSQL database and authentication/email services.

### 4. Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```

The repository also includes Prisma seed data for development.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
app/
├── (auth)/        # Authentication and authorization pages
├── (main)/        # Public rental experience
├── api/           # Application API routes
└── dashboard/     # Protected admin dashboard

components/        # Reusable UI components
lib/               # Auth and application utilities
mail/              # Email-related functionality
prisma/            # Schema, migrations, and seed data
server/             # Server-side application logic
public/             # Static assets
```

## Project Focus

This project demonstrates full-stack application development with authentication, role-based access control, relational data modeling, booking workflows, protected administration, and responsive UI development.

## Author

**Yohannes Haile**

Full-Stack Developer specializing in Next.js, React, TypeScript, and Node.js.

- GitHub: https://github.com/JoHaile
- LinkedIn: https://www.linkedin.com/in/johnny-haile/

