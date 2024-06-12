# ecommerce-frontend
This repository contains the backend for an e-commerce application, including API endpoints for products, carts, and orders.

## Overview
This project is the backend of an e-commerce application. It provides RESTful APIs for managing products, carts, and orders. The backend is built using Node.js and Express, and it connects to a MongoDB database to store data.

## Features
1. Product Management: Create, read, update, and delete products.
2. Cart Management: Add, remove, and manage items in a shopping cart.
3. Order Management: Place and track orders.

## Tech Stack
1. Node.js: JavaScript runtime for server-side development.
2. Express: Web framework for Node.js.
3. MongoDB: NoSQL database for storing data.
4. Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.

# Installation
## Prerequisites
Ensure you have the following installed on your machine:

### Node.js (version 14 or higher)
### npm (version 6 or higher)

### 1. Clone the Repository

   `git clone https://github.com/your-username/ecommerce-backend.git`
   `cd ecommerce-backend`

## 2. Install Dependencies:
   `npm install`

## 3. Start the Development Server:
   `npm start`


# Usage
The backend provides the following endpoints:

## Product Routes:
GET /api/products - Get all products
GET /api/products/:id - Get a product by ID
POST /api/products - Create a new product
PUT /api/products/:id - Update a product by ID
DELETE /api/products/:id - Delete a product by ID

## Cart Routes:
GET /api/cart - Get the current cart
POST /api/cart - Add an item to the cart
PUT /api/cart/:id - Update an item in the cart
DELETE /api/cart/:id - Remove an item from the cart

## Order Routes:
GET /api/orders - Get all orders
GET /api/orders/:id - Get an order by ID
POST /api/orders - Place a new order

# License
This project is licensed under the MIT License. See the LICENSE file for details.
