import UserModel from "../models/userModel";
import { NextResponse } from "next/server";
import connectDB from "../DB/connectDB";
import bcrypt from "bcrypt";



export const POST = async(request)=>{

    const {Name,Email,Password,Picture} = await request.json();
    const hashedPassword = await bcrypt.hash(Password,5);

    const newUser ={
        Name,
        Email,
        Password:hashedPassword,
        Picture,
    }

    try{
        await connectDB();
        const response = await UserModel.create(newUser);
        return NextResponse.json({
            "response":response
        },{status:201});

    }catch(error){
        return NextResponse.json({
            "msg":"Someting went wrong!"
        },{status:400})
    }
}


