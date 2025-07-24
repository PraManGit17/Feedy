import Form from "../models/Form.js";

export const feedback = async (req, res) => {

  try {
    const feedbacks = await Form.find().sort({
      createdAt: -1
    });

    if (!feedbacks) {
      return res.send('No Feebacks Yet');
    }

    res.render('feedback', {feedbacks} )
  } catch (error) {
    res.status(500).send('Server Error');
  }

}