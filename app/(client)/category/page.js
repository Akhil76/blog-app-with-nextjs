"use client";
import { useEffect, useState } from "react";


export default function Category() {
    const [posts, setPosts] = useState({}); // Initialize as an array

    const getPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/category", {
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
  
    console.log(posts);
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <h1>Category</h1>
      </div>
    </div>
  );
}
