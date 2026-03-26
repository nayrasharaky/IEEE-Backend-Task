IEEETASK 2 – Brand Management API








This project is a RESTful API for managing brands. It demonstrates CRUD operations, routing, middleware, and MongoDB integration using Express.js and Mongoose.

📌 Features
Create Brand
Add a new brand with a name and optional image. Slugs are automatically generated.
Fetch All Brands
Retrieve all brands stored in the database with name, slug, and image.
Fetch Single Brand
Get details of a specific brand by ID. Returns an error if the brand does not exist.
Update Brand
Update a brand’s name and/or image. Slugs are updated automatically if the name changes.
Delete Brand
Remove a brand from the database. Returns a confirmation message.
🛠️ Technologies Used
Node.js (ES6) – JavaScript runtime environment
Express.js – Web framework for building APIs
MongoDB & Mongoose – Database and data modeling
slugify – Generate URL-friendly slugs automatically
▶️ How to Run
Clone the repository.
Install dependencies: npm install
Make sure MongoDB is running locally.
Start the server: npm run dev
Test the API using Postman or Insomnia.
⚡ Notes
Slugs are automatically generated from brand names.
Brand names must be between 3–32 characters.
Timestamps (createdAt and updatedAt) are automatically included.
All responses are returned in JSON format.
👩‍💻 Author

Nayra Sharaky
