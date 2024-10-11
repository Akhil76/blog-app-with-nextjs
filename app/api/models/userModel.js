import mongoose from "mongoose";



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
    Posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ],
})

const User = mongoose.models.Category || mongoose.model('user', userSchema)
export default User;