import { claudeBusiness } from './claudeBusiness';

export const askControl = async (req, res) => {
    try {
        let { prompt } = req.body;
        let responseData = await claudeBusiness(prompt);
        res.status(200).json({data: responseData, success: true});
    } catch (err) {
        res.status(400).json({success: true});
    }
} 