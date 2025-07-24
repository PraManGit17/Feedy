

import Form from "../models/Form.js";


export const feedback = async (req, res) => {
  
  const feedbacks = await Form.find().sort({
    createdAt: -1
  });

  if(!feedbacks)
  {
    return res.send('No Feebacks Yet');
  }

  res.status(200).json(feedbacks);

}