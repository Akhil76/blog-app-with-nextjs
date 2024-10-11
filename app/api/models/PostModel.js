import mongoose from "mongoose";



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
    Descripion: {
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

const Post = mongoose.models.Category || mongoose.model('post', postSchema)
export default Post;