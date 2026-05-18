import { askBusiness } from './claudeBusiness.js';

export const askControl = async (req, res) => {
    try {
        let { prompt } = req.body;
        let responseData = await askBusiness(prompt);
        res.status(200).json({data: responseData, success: true});
    } catch (err) {
        res.status(400).json({success: true});
    }
} 