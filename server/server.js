// inorder to use process.env object we need this
require("dotenv").config();

// creating an instance of express
const express = require("express");

// creating an instance for mongoose
const mongoose = require("mongoose");

// this line creates an express app and stored it in this constant
// basically initializes the express
const app = express();
const catelogRoutes = require("../server/routes/catelogRoutes");

// process.env object contains all the environment variables of .env file
// process.env object is available globally in nodejs environment
const PORT = process.env.PORT | 4000;

// middle ware
// this checks if the request from the client side has some body or data attached to it
// if yes then that body/data is stored in req object
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// connected to all the routes in workouts.js file
// be sending a GET,POST,DELETE,PATCH request to our server
// we will be using this route /api/workouts[ENDPOINT] in order to send request to server
app.use("/api/catelogs", catelogRoutes);

// connecting to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("connected to DB & listen for port: ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// calling localhost:4000/ will send a get request to localhost:4000 server and
// server sends a response back for this request with this message
// app.get('/', (req, res) => {
//     res.json({msg: "welcome to the app"})
// })

// to run server without nodemon
// > node server.js OR USE
// > npm start
// to run server with nodemon
// > npm run dev
// because we have added the required statements in scripts section of package.json or node package manager

// To cancel nodemon process use ctrl + c and then enter y
