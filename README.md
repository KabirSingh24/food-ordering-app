# Food Ordering Management System

**Full-Stack Food Ordering Application (RBAC Enabled)**  
A modern web application demonstrating role-based access control, order lifecycle management, and country-based data isolation.

---

## **Project Overview**
This project implements a Food Ordering System as per the given take-home assignment.
The system supports multiple user roles (Admin, Manager, Member) with clearly defined permissions and includes country-based access control as a bonus requirement.
The application is built with Spring Boot (Java) for the backend and Next.js (React App Router) for the frontend.

**Key Features:**
- View restaurants and menu items
- Create orders and add food items
- Checkout and place orders (role-restricted)
- Cancel orders (Admin & Manager only)
- Manage payment methods (Admin only)

**Bonus: Country-Based Access**
- Managers and Members can only view and act on data related to their own country
- Cross-country access is restricted at the backend level

---

## **Technologies Used**
- **Backend:** Spring Boot, Role-Based Access Control (RBAC), PostgreSQL
- **Frontend:** Next.js, React Hooks, CSS (custom, responsive UI)
- **Hosting:** Demo video for functionality walkthrough, Render (Backend), Vercel (Frontend)
- **Database:** PostgreSQL (cloud-hosted)
- **Version Control:** Git + GitHub
- **AI Tools Used:** ChatGPT for boilerplate code and debugging assistance

---

## **Project Structure**
food-ordering-app/
│
├── slooze-food-ordering-backend/
│   ├── controllers
│   ├── services
│   ├── entities
│   ├── security
│   └── application.properties
│
├── slooze-food-ordering-frontend/
│   ├── app/
│   │   ├── page.js
│   │   ├── restaurants/
│   │   ├── menu/
│   │   ├── cart/
│   │   ├── orders/
│   │   └── payment/
│   └── styles.css
│
└── README.md

---

## **Screenshots**

### Login Dashboard
![Login Page](/slooze-food-ordering-frontend/public/main.jpeg)

### Restaurant Page
![Restaurant Page](/slooze-food-ordering-frontend/public/restaurantPage.jpeg)

### Menu Page
![Menu](/slooze-food-ordering-frontend/public/menuPage.jpeg)

### Cart Page
![Cart](/slooze-food-ordering-frontend/public/cartPage.jpeg)

### Payment Page
![Payment](/slooze-food-ordering-frontend/public/paymentPage.jpeg)

### Orders Page
![Orders](/slooze-food-ordering-frontend/public/ordersPage.jpeg)

---

## **Getting Started**

### **Backend Setup**
1. Clone the repository:

cd slooze-food-ordering-backend
./mvnw clean package
java -jar target/*.jar

### **Frontend Setup**
1. Clone the repository:

cd slooze-food-ordering-frontend
npm install
npm run dev
http://localhost:3000



## **Live Demo**

A complete walkthrough of the application demonstrating:
- Role-based login
- Restaurant & menu browsing
- Cart and order creation
- Checkout & cancel flows
- Country-based access control

📽️ **Watch the demo here:**  
https://drive.google.com/file/d/1ppIHtSDkUg-Zy1dLrqXC0hHzcfpfZ4SNEyGNmw6KMkM/view?usp=sharing
>


---

**##API Endpoints**
*Restaurants & Menu*
GET /restaurants
GET /menu?restaurantId={id}

*Orders*
POST /orders
POST /orders/{id}/checkout
DELETE /orders/{id}

*Payments*
POST /payments
PUT /payments/{id} (Admin only)

## Environment Setup

### Backend

Set environment variables in `application.properties` or `.env` file:

spring.datasource.url=YOUR_DB_URL
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD

Build and run backend:

./mvnw clean package  
java -jar target/*.jar  

### Frontend

Navigate to frontend:

cd ../slooze-food-ordering-frontend

Install dependencies:

npm install  

Run locally:

npm run dev  

Frontend will open at http://localhost:3000 

---

## My AI Usage

**Tools Used:** ChatGPT  

**How Used:**  
- Generated boilerplate backend and frontend code  
- Debugged API and CORS issues  
- Suggested CSS and UI improvements  

**Reflection:**  
AI sped up development, but all logic, structure, and styling were manually verified. The project was adapted to meet requirements and properly tested.  

---

## Deployment
  
Frontend: Vercel  
https://food-ordering-app-git-main-kabirsingh24s-projects.vercel.app/

---

## Future Improvements
 
- Add order history and admin analytics dashboard  

---

## Author

Kabir Singh | BSc
