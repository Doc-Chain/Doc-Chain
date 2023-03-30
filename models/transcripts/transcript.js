import sequelize from "../../config/dbconfig.js";
import Sequelize from "sequelize";
import Student from "../student/studentmodel.js";

const Transcripts = sequelize.define("transcript", {
  svv_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  link: {
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

Transcripts.belongsTo(Student, {
  foreignKey: {
    name: "svv_id",
    allowNull: false
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
