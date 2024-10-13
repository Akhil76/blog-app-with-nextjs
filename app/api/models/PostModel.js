import mongoose from "mongoose";
import { Schema } from "mongoose";


const postSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Category:{
        type: String,
        required: true,
    },
    Picture: {
        type: String,
    },
    Description: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: new Date()
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
})

const PostModel = mongoose.models.post || mongoose.model('post', postSchema)
export default PostModel;