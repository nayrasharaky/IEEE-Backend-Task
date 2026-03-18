const express = require("express");



const connectDb = require("./config/db");
const categoryRouter = require('./routes/category.router');

// initialize your express app
const app = express();


// using your middlewares
app.use(express.json());

// using your routes
app.use('/api/v1/categories' , categoryRouter);



// connection to DB AND LISTENING TO YOUR APP

const port = 3000;

connectDb()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
