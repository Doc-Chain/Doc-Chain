import sequelize from "../../config/dbconfig.js";
import Sequelize from "sequelize";
import Transcripts from "../transcripts/transcript.js";

const Student = sequelize.define("student", {
  svv_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  roll_no: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  middle_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  branch: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  course: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal(
      "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    ),
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Student table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create Student table : ", error);
  });


export default Student;
