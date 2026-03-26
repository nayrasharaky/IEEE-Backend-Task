IEEETASK 2 - Brand Management API

This project contains a simple RESTful API for managing brands. It demonstrates basic backend programming concepts such as CRUD operations, routing, middleware, and MongoDB integration.

📌 Task 1: Create Brand

This task allows you to create a new brand. The slug (URL-friendly name) is automatically generated from the brand name.

Functionality:

Add a new brand with a name and an optional image.
Slug is automatically created from the name.
Returns a success message and the created brand.
📌 Task 2: Fetch All Brands

This task retrieves all the brands stored in the database.

Functionality:

Returns a list of all brands.
Includes the total count of brands.
Each brand has a name, slug, and optional image.
📌 Task 3: Fetch Single Brand

This task retrieves details of a single brand by its ID.

Functionality:

Returns the brand’s details including name, slug, and image.
If the brand does not exist, it returns an error message.
📌 Task 4: Update Brand

This task allows you to update an existing brand.

Functionality:

Update the name and/or image of a brand.
If the name is updated, the slug is automatically updated as well.
Returns a success message and the updated brand.
📌 Task 5: Delete Brand

This task allows you to delete a brand by its ID.

Functionality:

Deletes the selected brand from the database.
Returns a success message confirming deletion.
🛠️ Technologies Used
Node.js (ES6)
Express.js
MongoDB & Mongoose
slugify
▶️ How to Run
Clone the repository.
Install dependencies.
Make sure MongoDB is running locally.
Start the server.
Use tools like Postman or Insomnia to test the API.
👩‍💻 Author

Nayra Sharaky
