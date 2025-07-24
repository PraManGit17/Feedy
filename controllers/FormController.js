
import Form from '../models/Form.js';


export const submit = async (req, res) => {

  const { name, message } = req.body;

  if( !name || !message )
  {
    return res.send('Please Enter all Fields!!');
  }

  await Form.create({
    name,
    message,
  })

  res.status(201).json({
    name,
    message
  })
}