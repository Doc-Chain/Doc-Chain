import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config();

// Initialize db
import "../config/dbconfig.js"

// Initialize models
import "../models/transcripts/transcript.js"
import "../models/student/studentmodel.js"
