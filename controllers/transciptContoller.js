import { Transcripts as _transcripts } from '../models/index.js';

const Transcripts = _transcripts;
export const addTranscript = async (req, res) => {
    const transcripts = await Transcripts.create({
        svv_id: 123456,
        link: "https://google.com",
        hash: "tytytytytyt",
        filename: "bhavya.pdf"
    });
    console.log(transcripts instanceof Transcripts);
    console.log(transcripts.svv_id);
    // await student.save();
    console.log(transcripts.toJSON());
    res.status(200).json(transcripts.toJSON());
}

export const getTranscript = async (req, res) => {
    // const studTranscript = await Transcripts.findAll({});
    const studTranscript = await Transcripts.findOne({
        where: {
            hash: req.params.hash
        }
    });
    res.status(200).json({ data: studTranscript })
}

export default { addTranscript, getTranscript };