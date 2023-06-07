import express from "express";
var router = express.Router();
import { fileURLToPath } from "url";
import { dirname } from "path";
import { getAllStudents, getStudent, loginStudent } from "../../controllers/studentController.js";
import { getTranscriptBySVV } from "../../controllers/transciptContoller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

router.get("/", function (req, res) {
  res.sendFile("admin.html", { root: "./public" });
});
router.get("/add/:svv_id", function (req, res) {
  res.sendFile("adddocument.html", { root: "./public" });
});

router.get("/students/get", async function (req, res) {
    try {
        const studData = await getAllStudents(req, res);
        console.log(studData)
        res.status(200).json(studData);
      } catch (err) {
        console.error(err);
        res.json(err);
      }
});

router.get("/students/get/:svv_id", async function (req, res) {
  try {
      const studData = await getStudent(req, res);
      console.log(studData)
      res.status(200).json(studData);
    } catch (err) {
      console.error(err);
      res.json(err);
    }
});
router.get("/api/documents/:svv_id", async function (req, res) {
  try {
      const studData = await getTranscriptBySVV(req, res);
      
      res.json(studData)
    } catch (err) {
      console.error(err);
      res.json(err);
    }
});
router.post("/document/create", async function (req, res) {
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

export default router;
