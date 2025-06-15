# 🌐 URL Shortener with Visit History Tracking  

## 📌 Overview  
A **Node.js-powered URL Shortener** that not only generates short links but also **tracks visit history**, providing valuable insights into user interactions. Built using **Express.js**, **MongoDB**, and **Mongoose**, this API ensures efficient URL management and analytics.  

## 🛠 Technologies Used  
- **Node.js** – Backend runtime for API operations  
- **Express.js** – Simplifies API request handling  
- **MongoDB** – Stores URL mappings and visit records  
- **Mongoose** – Provides a schema-based approach to MongoDB  
- **Nanoid** – Generates unique short URLs  
- **Postman** – Helps with API testing  

## 📂 Project Structure  

📦 url-shortener

┣ 📂 models

┃ ┣ 📜 urlModel.js

┣ 📜 server.js

┣ 📜 package.json

┣ 📜 README.m


## 🎯 Features  
- Generate short URLs for long links  
- Track visit history (timestamps & IPs)  
- Redirect users to original URLs  
- Store & retrieve analytics data  
- Handle API requests efficiently  

## 🚀 Getting Started  

### Install Dependencies  

npm install express mongoose cors nodemon

### Set Up Environment Variables  
Create a `.env` file and configure:  

MONGO_URI=your_mongodb_connection_string  
BASE_URL=http://localhost:5000  

### Run the Server  

npm start

Your API will be live on `http://localhost:5000`.  

## 🔗 API Endpoints  

### Create a Short URL  
**POST** `/api/shorten`  

**Request Body:**  

{ "longUrl": "https://example.com" }

**Response:**  

{ "shortUrl": "http://localhost:5000/abc123" }


### Get Visit History  
**GET** `/api/analytics/:shortUrl`  
Returns detailed visit history of a given short URL.  

## 📖 Future Enhancements  
- Click tracking & referrer insights  
- URL expiration feature  
- User authentication for personal dashboards  

## 🤝 Contributing  
Feel free to **fork, improve, and create pull requests**. Let's build something amazing together!  

---

### 🚀 Happy coding! 💡  
