import { NextResponse } from "next/server";
import connectDB from "../../DB/connectDB";
import PostModel from "../../models/PostModel";


//http://localhost:3000/api/postdetails/[id]


export async function GET(req,{params}){
    try{
        await connectDB()
        const posts = await PostModel.find({_id:params.id});
        return NextResponse.json({
            "data":posts
        })
    }catch(error){
        return NextResponse.json({
            "msg":"Someting went wrong!"
        },{status:400})
    }
}