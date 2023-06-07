import express from "express";
var router = express.Router();
import { fileURLToPath } from "url";
import { dirname } from "path";
import { getStudent, loginStudent } from "../../controllers/studentController.js";
import { getTranscriptBySVV } from "../../controllers/transciptContoller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

router.get("/", function (req, res) {
  res.sendFile("login.html", { root: "./public" });
});

router.get("/login", function (req, res) {
  res.sendFile("login.html", { root: "./public" });
});

router.post("/loginuser", async function (req, res) {
  try {
    const studData = await loginStudent(req, res);

    const jsondata = JSON.parse(JSON.stringify(studData));
    // console.log(jsondata)

    res.cookie("svv_id", jsondata.svv_id, { maxAge: 900000 });
    res.status(200).redirect("/my/home");
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

router.get("/home", function (req, res) {
    res.sendFile("homepage.html", { root: "./public" });
});

router.get("/documents", function (req, res) {
  res.sendFile("document.html", { root: "./public" });
});

router.get("/api/documents/:svv_id", async function (req, res) {
    try {
        const studData = await getTranscriptBySVV(req, res);
        
        // const jsondata = JSON.parse(JSON.stringify(studData));
        console.log(jsondata)
        res.json(studData)
      } catch (err) {
        console.error(err);
        res.json(err);
      }
  });

export default router;
