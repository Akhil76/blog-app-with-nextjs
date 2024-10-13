import connectDB from "../DB/connectDB";
import { NextResponse } from "next/server";
import PostModel from "../models/PostModel";

//http://localhost:3000/api/post


export async function GET(req){
    try{
        await connectDB()
        const posts = await PostModel.find();
        return NextResponse.json({
            "data":posts
        })
    }catch(error){
        return NextResponse.json({
            "msg":"Someting went wrong!"
        },{status:400})
    }
}

export async function POST(req){
    const body = await req.json();
    try{
        await connectDB()
        const result = await PostModel.create(body);
        return NextResponse.json({
            "response":result
        },{status:201})
    }catch(error){
        console.log(error)
        return NextResponse.json({
            "msg":"Someting went wrong!"
        },{status:400},error)
    }
}