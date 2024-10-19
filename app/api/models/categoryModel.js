import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true 
    },
    Date:{
        type: Date,
        default: new Date()
    }
  
})

const CategoryModel = mongoose.models.category || mongoose.model('category',categorySchema)
export default CategoryModel;