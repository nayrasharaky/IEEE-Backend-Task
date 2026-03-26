# IEEETASK
# Brand Management API

This project is a complete RESTful API for managing brands with full CRUD operations using Node.js, Express, and MongoDB.

---

## 📌 Features
This API provides complete brand management functionality:
- Create new brands with automatic slug generation
- Get all brands with count
- Get single brand by ID
- Update existing brands
- Delete brands permanently

### Example Usage:
**Create Brand:**
```
POST /api/brands
{
  "name": "Nike",
  "image": "https://example.com/nike.jpg"
}
```

**Response:**
```
{
  "message": "Brand created successfully",
  "result": {
    "name": "Nike",
    "slug": "nike",
    "image": "https://example.com/nike.jpg"
  }
}
```

---

## 🛠️ Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Slugify** - URL-friendly slugs

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/brands` | Create new brand |
| `GET` | `/api/brands` | Get all brands |
| `GET` | `/api/brands/:id` | Get single brand |
| `PUT` | `/api/brands/:id` | Update brand |
| `DELETE` | `/api/brands/:id` | Delete brand |

---

## ▶️ How to Run

1. **Install dependencies:**
```bash
npm install
```

2. **Start MongoDB:**
```
mongodb://127.0.0.1:27017/ieeetask2
```

3. **Run the server:**
```bash
npm run dev
```

4. **Test API:**
```
Server running on: http://localhost:3000
Base URL: http://localhost:3000/api/brands
```

---

## 📁 Project Structure
```
ieeetask/
├── controllers/
│   └── brand.controller.js
├── models/
│   └── brand.model.js
├── routes/
│   └── brand.routes.js
├── server.js
├── package.json
└── README.md
```

---

## ✅ Validation Rules
- Brand name: 3-32 characters
- Slug: auto-generated (lowercase)
- Image: URL string (optional)

---

## 🧪 Test with cURL
```bash
# Create
curl -X POST http://localhost:3000/api/brands -H "Content-Type: application/json" -d '{"name":"Adidas"}'

# Read all
curl http://localhost:3000/api/brands

# Read one
curl http://localhost:3000/api/brands/{id}

# Update
curl -X PUT http://localhost:3000/api/brands/{id} -H "Content-Type: application/json" -d '{"name":"Adidas Pro"}'

# Delete
curl -X DELETE http://localhost:3000/api/brands/{id}
```

---

## 👩‍💻 Author
Nayra Sharaky

---

