import express from "express";
var router = express.Router();
import { fileURLToPath } from "url";
import { dirname } from "path";
import { getAllStudents, getStudent, loginStudent } from "../../controllers/studentController.js";
import { addTranscript, getTranscriptBySVV } from "../../controllers/transciptContoller.js";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

router.get("/", function (req, res) {
  res.sendFile("admin.html", { root: "./public" });
});
router.get("/add/:svv_id", function (req, res) {
  res.sendFile("addDocument.html", { root: "./public" });
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
      res.status(200).json({ data: studData });
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

router.post("student/transacript/create/:svv_id", async function (req, res) {
  try {
      const transcript = await addTranscript(req, res);

      res.status(200).json(transcript.toJSON());
    } catch (err) {
      console.error(err);
      res.json(err);
    }
});
export default router;
