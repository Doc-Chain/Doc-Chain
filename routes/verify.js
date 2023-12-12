import express from "express";
import { getStudentbyLink } from "../controllers/transciptContoller.js";
var router = express.Router();

router.get("/", function (req, res) {
    res.sendFile("verify.html", { root: "./public" });
});

router.post("/verifyDocument", async function (req, res) {
    console.log(req)
    if(!req.body.authorizationCookieExists && req.body.password != "12345678"){
        res.status(401).json({
            verified: false,
            message: "Incorrect Password",
        });
        return;
    }
    try {
      const transcript = await getStudentbyLink(req, res);
  
      if (transcript.length > 0) {
        // Extracting basic student details
        const basicStudentDetails = transcript.map(({ student }) => {
          return {
            svv_id: student.svv_id,
            roll_no: student.roll_no,
            first_name: student.first_name,
            middle_name: student.middle_name,
            last_name: student.last_name,
            year: student.year,
            branch: student.branch,
            course: student.course,
            phone: student.phone,
            email: student.email,
          };
        });
  
        // Sending the response with basic student details and verification message
        res.status(200).json({
          verified: true,
          message: "Student verified successfully",
          link: req.body.link,
          studentDetails: basicStudentDetails,
        });
      } else {
        // Sending a response when no transcript is found
        res.status(404).json({
          verified: false,
          message: "No transcript found for the provided link",
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  
  

export default router;