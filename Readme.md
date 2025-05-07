# Microservice Project

This project is built using **Node.js** and **MongoDB**, structured into multiple microservices:

- **API Gateway**
- **Auth Service**
- **User Service**
- **Wallet Service**

## 📦 Prerequisites

- Node.js >= 16
- MongoDB Atlas URI
- A `.env` file in the root directory for shared configuration

## 🚀 Getting Started

### Step 1: Install dependencies

Run the following command inside each microservice folder:

```bash
npm install

```Use the provided start.js script to run all services
npm run dev

Use below keys are must be in the env file.
PORT
MONGODB_URI
DB_NAME
JWT_SECRET  # For Auth Service