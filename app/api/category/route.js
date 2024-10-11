import connectDB from "../DB/connectDB";
import { NextResponse } from "next/server";
import CategoryModel from "../models/categoryModel";

//http://localhost:3000/api/category


export async function GET(req){
    try{
        await connectDB()
        const categories = await CategoryModel.find();
        return NextResponse.json({
            "data":categories
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
        const result = await CategoryModel.create();
        return NextResponse.json({
            "data":categories
        })
    }catch(error){
        return NextResponse.json({
            "msg":"Someting went wrong!"
        },{status:400})
    }
}