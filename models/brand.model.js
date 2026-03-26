import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32
  },
  slug: {
    type: String,
    lowercase: true
  },
  image: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('Brand', brandSchema);