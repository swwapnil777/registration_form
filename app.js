// app.js
import express from "express";
import { connectDB } from "./db/connectDB.js";
import web from "./routes/web.js";
const app = express();
const DATABASE_URL = "mongodb://127.0.0.1:27017/blogdb";
const port = 9000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", web);
connectDB(DATABASE_URL);
app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
