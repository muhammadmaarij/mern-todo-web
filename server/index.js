import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todosRoute from "./routes/todos.js";

const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/todos", todosRoute);

const mongodb =
  "mongodb+srv://ckmobile:123@cluster0.1cih6pg.mongodb.net/todos-database?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
