import sequelize from "../../config/dbconfig.js";
import Sequelize from "sequelize";
import Student from "../student/studentmodel.js";

export const Transcripts = sequelize.define("transcript", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  svv_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: true,
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
    console.log("Transcript table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create Transcript table : ", error);
  });
  
export default Transcripts;
