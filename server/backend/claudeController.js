import { askBusiness } from "./claudeBusiness.js";

export const askControl = async (req, res) => {
  try {

    let { prompt } = req.body;

    let responseData = await askBusiness(prompt);
    console.log("[parse-emotion] prompt:", prompt);
    console.log("[parse-emotion] response:", responseData);
    res.status(200).json({ data: responseData, success: true });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
