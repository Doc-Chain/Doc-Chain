import { Student as student } from '../models/student/studentmodel.js';

const Student = student;
export const addStudent = async (req, res) => {
    const student = await Student.create({
        svv_id: 1234,
        roll_no: "16010121819",
        first_name: "Ambaprasad",
        middle_name: "Paresh",
        last_name: "Pathak",
        year: "Fourth",
        branch: "Computer Engineering",
        course: "Software Engineering",
        phone: "9004077894",
        email: "bhavya.sura@somaiya.edu"
    });
    console.log(student instanceof Student);
    console.log(student.svv_id);
    // await student.save();
    console.log(student.toJSON());
    res.status(200).json(student.toJSON());
}

export const getStudent = async (req, res) => {
    // const studData = await Student.findAll({});
    const studData = await Student.findOne({
        where: {
            svv_id: req.params.svv_id
        }
    });
    return studData;
}

export const getAllStudents = async (req, res) => {
    // const studData = await Student.findAll({});
    const studData = await Student.findAll();
    res.status(200).json({ data: studData });
}

export const loginStudent = async (req, res) => {
    // const studData = await Student.findAll({});
    const studData = await Student.findOne({
        where: {
            roll_no: req.body.username,
            password: req.body.password
        }
    });
    return studData;
}
export default { addStudent, getStudent, loginStudent };