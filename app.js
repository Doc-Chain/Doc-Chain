import express from "express";
const PORT = process.env.PORT || 3000;
import bodyParser from "body-parser";
import upload_file from "./upload-file.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set routes
app.use("/file/upload", upload_file);

app.listen(PORT, () => {
  console.info("Server running on server " + PORT);
});
