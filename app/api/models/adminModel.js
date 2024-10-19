import mongoose from "mongoose";



const adminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true, 
    },
    Password:{
        type: String,
        required: true, 
    },
    Picture: {
        type: String,
    },
    Date: {
        type: Date,
        default: new Date()
    },
   
})

const adminModel = mongoose.models.admin || mongoose.model('admin', adminSchema)
export default adminModel;