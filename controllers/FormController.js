
import Form from '../models/Form.js';

export const submit = async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, error: 'Please enter all fields!' });
  }

  await Form.create({ name, message }); 
  res.status(200).send("OK");
};
