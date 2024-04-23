const express = require("express");
const { mongoDBURL, Port } = require("./config");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//middleware for cors
//1
app.use(cors());
//2
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  res.status(234).send("welcome to MERN Stack Tutorial");
});
//root
app.use("/books", require("./routes/book.route"));

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(Port, () => {
      console.log(`server is running at ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
