# Microservice Project

This project is built using **Node.js** and **MongoDB**, structured into multiple microservices:

- **API Gateway**
- **Auth Service**
- **User Service**
- **Wallet Service**

## 📦 Prerequisites

- Node.js >= 16
- MongoDB Atlas URI
- Create a .env file in the root directory with the following keys:
  ```env
  PORT=your_port
  MONGODB_URI=your_mongo_uri
  DB_NAME=your_database_name
  JWT_SECRET=your_jwt_secret

## 🚀 Getting Started

### Step 1: Install dependencies

Run the following command inside each microservice folder:

```bash
npm install

### Step 2: Run All the Services
-Use the provided start.js script to run all services
npm run dev
