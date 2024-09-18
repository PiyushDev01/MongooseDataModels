import mongoose from "mongoose"
 
const ctgSchema = new mongoose.Schema({

  categoryName:{
    type: String,
    required: true 
  }

});

export const Category = mongoose.model("Ctg", ctgSchema)