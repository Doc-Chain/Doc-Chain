import dotenv from 'dotenv'
dotenv.config();

// Initialize models
import "../models/student/studentmodel.js"
import "../models/transcripts/transcript.js"

Transcripts.belongsTo(Student, {
    foreignKey: {
      name: "svv_id",
      allowNull: false
    },
  }); 

import Student from "./student/studentmodel.js";
import Transcripts from "./transcripts/transcript.js"; 
