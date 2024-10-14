"use client";
import { useEffect, useState } from "react";
import PostCard from "@/app/components/PostCard";


export default function PostbyId({params}) {
  const {id} = params;
  const [posts, setPosts] = useState([]); // Initialize as an array

  const getPosts = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/postdetails/${id}`, {
        method: "GET",
      });
      const data = await res.json();
      setPosts(data.data); // Set the 'data' array to state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts.data); 
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
       
          {
          posts.length>0? (
            posts.map((post)=>(
              <div>
                <h1>{post.Title}</h1>
                <h1>{post.Description}</h1>
              </div>
            ))
          ):(<p>Loading....</p>)
          }
       
      </div>
    </div>
  );
}
