

import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model('Form', FormSchema);