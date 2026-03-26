IEEETASK 2 - Brand Management API

This project contains a simple RESTful API for managing brands. It demonstrates basic backend programming concepts such as CRUD operations, routing, middleware, and MongoDB integration.

📌 Task 1: Create Brand

This endpoint allows you to create a new brand. The slug is automatically generated from the brand name.

Example:

Request:

POST /api/brands
{
  "name": "Nike",
  "image": "nike-image-url"
}

Response:

{
  "message": "Brand created successfully",
  "result": {
    "name": "Nike",
    "slug": "nike",
    "image": "nike-image-url"
  }
}
📌 Task 2: Fetch Brands

This endpoint returns all brands stored in the database.

Example:

Request:

GET /api/brands

Response:

{
  "count": 3,
  "result": [
    { "name": "Nike", "slug": "nike", "image": "nike-image-url" },
    { "name": "Adidas", "slug": "adidas", "image": "adidas-image-url" },
    { "name": "Puma", "slug": "puma", "image": "puma-image-url" }
  ]
}
📌 Task 3: Fetch Single Brand

This endpoint returns a single brand by its ID.

Example:

Request:

GET /api/brands/:id

Response:

{
  "result": {
    "name": "Nike",
    "slug": "nike",
    "image": "nike-image-url"
  }
}
📌 Task 4: Update Brand

This endpoint updates a brand's name and/or image. The slug is updated automatically if the name changes.

Example:

Request:

PUT /api/brands/:id
{
  "name": "Nike Updated",
  "image": "new-image-url"
}

Response:

{
  "message": "Brand updated",
  "result": {
    "name": "Nike Updated",
    "slug": "nike-updated",
    "image": "new-image-url"
  }
}
📌 Task 5: Delete Brand

This endpoint deletes a brand by its ID.

Example:

Request:

DELETE /api/brands/:id

Response:

{
  "message": "Brand deleted"
}
🛠️ Technologies Used
Node.js (ES6)
Express.js
MongoDB & Mongoose
slugify
▶️ How to Run
Clone the repository
Run npm install to install dependencies
Make sure MongoDB is running locally
Run npm run dev
Use Postman or Insomnia to test the API
👩‍💻 Author

Nayra Sharaky
