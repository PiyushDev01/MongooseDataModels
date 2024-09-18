import mongoose from 'mongoose';

const orderitemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    userby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ctg',
      required: true,
    },
    orderprice: {
      type: Number,
      required: true,
    },
    orderitem: {
      type: [orderitemSchema],
    },
  },
  { timestamps: true }
);

export const order = mongoose.model('Order', orderSchema);
