import mongoose, { mongo } from "mongoose"

const todoSchema = new mongoose.Schema({
  content:{
    type: String,
    required: true,
    min: 200
  },
  completed:{
    type:Boolean,
    default: false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodos:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subtodo"
  }

},{timestamps: true})

export const todo = mongoose.model("Todo",todoSchema)