import { Transcripts as transcripts } from '../models/transcripts/transcript.js';

const Transcripts = transcripts;
export const addTranscript = async (req, res) => {
    const transcripts = await Transcripts.create({
        svv_id: req.body.svv_id,
        link: req.body.link,
        hash: req.body.hash,
        filename: req.body.filename
        // svv_id: 123456,
        // link: "https://google.com",
        // hash: "tytytytytyt",
        // filename: "bhavya.pdf"
    });
    
    return transcripts;
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
export const getTranscriptBySVV = async (req, res) => {
    // const studTranscript = await Transcripts.findAll({});
    const studTranscript = await Transcripts.findAll({
        where: {
            svv_id: req.params.svv_id
        }
    });
    res.status(200).json({ data: studTranscript })
}
export default { addTranscript, getTranscript };