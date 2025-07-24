

import mongoose from 'mongoose';

const FormSchema = mongoose.model({
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


export default mongoose.model('Form', FormSchema);