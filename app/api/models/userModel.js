import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
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
    LikedPosts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ],
})

const UserModel = mongoose.models.user || mongoose.model('user', userSchema)
export default UserModel;