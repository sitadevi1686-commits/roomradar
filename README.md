# Room Radar 🏠✨

> **Next-Generation Real Estate, Apartment & Property Discovery Platform**

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

---

## 👑 Executive Leadership & Ownership

- **Founder & Chief Executive Officer (CEO):** Harmanpreet Singh
- **Official Contact:** [contact@roomradar.com](mailto:contact@roomradar.com)
- **Website:** [www.roomradar.com](https://www.roomradar.com)

Room Radar is designed and spearheaded by **Harmanpreet Singh** with the vision of simplifying real estate discovery, property acquisition, rentals, and agent workflows through modern web technology and seamless user experiences.

---

## 🌟 Key Features

- 🔍 **Intelligent Property Search:** Over 35+ advanced filtering options (price range, bedroom count, location, square footage, amenities, and property types).
- 🗺️ **Interactive Maps & Geospatial Discovery:** Map-integrated listings allowing buyers and renters to explore properties in real-time.
- 🏢 **Multi-Category Real Estate:** Apartments, luxury villas, commercial spaces, studios, family houses, and office spaces.
- 📊 **Agent & User Dashboard:**
  - Dedicated property management portal
  - Add and edit property listings
  - Saved favorites and saved search alerts
  - Direct customer inquiry and messaging system
  - Review and feedback analytics
- ⚖️ **Property Comparison Tool:** Side-by-side comparative analysis of multiple properties with specs and features.
- 📱 **Fully Responsive & High-Performance:** Optimized for mobile, tablet, and desktop viewing with server-side rendering (SSR) via Next.js.
- 🔐 **Secure Backend API:** Authentication, JWT sessions, bcrypt password hashing, and Sequelize ORM backed by PostgreSQL.

---

## 🏗️ Architecture & Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI & Styling:** Sass (SCSS), Bootstrap 5, FontAwesome 6
- **State Management:** Redux Toolkit & React-Redux
- **Forms & Validation:** React Hook Form & Yup
- **Animation & Carousels:** Slick Carousel, WOW.js, React CountUp, Fancybox

### Backend (`/real-estate-backend`)
- **Runtime:** Node.js & Express
- **Language:** TypeScript
- **Database ORM:** Sequelize & PostgreSQL
- **Security:** JWT (JSON Web Tokens), bcryptjs password hashing, CORS

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (for local backend database)

---

### 1. Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

### 2. Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd real-estate-backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   Create a `.env` file in `real-estate-backend/`:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=roomradar_db
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run migrations and start backend server:**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```plaintext
roomradar/
├── public/                 # Static assets, logos, and images
├── src/
│   ├── app/                # Next.js 14 App Router routes & pages
│   ├── assets/             # SCSS, images, and fonts
│   ├── components/         # Reusable UI components & section blocks
│   │   ├── dashboard/      # User & agent dashboard views
│   │   ├── homes/          # Homepage variations (1 to 5)
│   │   ├── inner-pages/    # Listing details, about, agents, contact
│   │   └── common/         # Modals, comparison, pagination, cards
│   ├── data/               # Static datasets, property data, agent profiles
│   ├── layouts/            # Headers, Footers, and Root Wrapper
│   ├── redux/              # Redux slices and global store
│   └── styles/             # Modular SCSS styling rules
├── real-estate-backend/    # Express + PostgreSQL API backend
│   ├── config/             # Database connection configuration
│   ├── migrations/         # Sequelize migration schemas
│   ├── models/             # Database entity models
│   └── src/                # Controllers, routes, and middlewares
├── package.json            # Frontend dependencies & scripts
└── README.md               # Project documentation & overview
```

---

## 📄 License & Intellectual Property

Copyright © 2025 **Room Radar**. All rights reserved.  
Founded and operated by **Harmanpreet Singh**.
