import express from "express";
const PORT = process.env.PORT || 3000;
import bodyParser from "body-parser";
import upload_file from "./routes/uploadFile/upload-file.js";
import fileUpload from "express-fileupload";


import dotenv from 'dotenv'
dotenv.config();

const app = express();

// initialize database
import "./models/init.js"

app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set routes
app.use("/file/upload", upload_file);

app.listen(PORT, () => {
  console.info("Server running on server " + PORT);
});
