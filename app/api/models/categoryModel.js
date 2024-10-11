import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    }
  
})

const Category = mongoose.models.Category || mongoose.model('category',categorySchema)
export default Category;