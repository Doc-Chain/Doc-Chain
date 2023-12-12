import Student from "../models/student/studentmodel.js";
import { Transcripts as transcripts } from "../models/transcripts/transcript.js";

const Transcripts = transcripts;
export const addTranscript = async (req, res) => {
  const transcripts = await Transcripts.create({
    svv_id: req.body.svv_id,
    link: req.body.link,
    hash: req.body.hash,
    name: req.body.filename,
    // svv_id: 123456,
    // link: "https://google.com",
    // hash: "tytytytytyt",
    // filename: "bhavya.pdf"
  });

  return transcripts;
};

export const getTranscript = async (req, res) => {
  // const studTranscript = await Transcripts.findAll({});
  const studTranscript = await Transcripts.findOne({
    where: {
      hash: req.params.hash,
    },
  });
  res.status(200).json({ data: studTranscript });
};
export const getTranscriptBySVV = async (req, res) => {
  // const studTranscript = await Transcripts.findAll({});
  const studTranscript = await Transcripts.findAll({
    where: {
      svv_id: req.params.svv_id,
    },
  });
  return studTranscript;
};
export const getStudentbyLink = async (req, res) => {
  // const studTranscript = await Transcripts.findAll({});
  let url = req.params.link;
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + req.body.link;
  }
 const studTranscript = await Transcripts.findAll({
  attributes: ['id', 'svv_id', 'link', 'name', 'hash', 'createdAt', 'updatedAt'],
  where: {
    link: req.body.link,
  },
  include: [
    {
      model: Student,
      attributes: ['svv_id', 'roll_no', 'first_name', 'middle_name', 'last_name', 'year', 'branch', 'course', 'phone', 'email', 'createdAt', 'updatedAt'],

    },
  ],
});
return studTranscript;

};
export default { addTranscript, getTranscript };
