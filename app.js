import express from "express";
const PORT = process.env.PORT || 3000;
import bodyParser from "body-parser";
import upload_file from "./routes/uploadFile/upload-file.js";
import studentDashboard from "./routes/uploadFile/studentDashboard.js";
import adminDashboard from "./routes/uploadFile/adminDashboard.js";
import fileUpload from "express-fileupload";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import dotenv from 'dotenv'
dotenv.config();

const app = express();

// initialize database
import "./models/init.js"

app.use(fileUpload());

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("public", express.static(__dirname + '/public'));
// Set routes
app.use("/file/upload", upload_file);
app.use("/my", studentDashboard )
app.use("/admin", adminDashboard )
app.listen(PORT, () => {
  console.info("Server running on server " + PORT);
});
