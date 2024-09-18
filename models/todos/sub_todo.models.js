import mongoose from 'mongoose';

const subtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      min: 200,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model('Subtodo', subtodoSchema);
