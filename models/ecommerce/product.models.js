import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
      min: 5,
      max: 20,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      max: 200,
    },
    productImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ctg',
      required: true,
    },
  },
  { timestamps: true }
);

export const product = mongoose.model('Product', productSchema);
