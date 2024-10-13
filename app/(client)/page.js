"use client";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCart";

export default function Home() {
  const [posts, setPosts] = useState([]); // Initialize as an array

  const getPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/post", {
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {posts.map((post) => (
            <PostCard title={post.Title} description={post.Description}/>
          ))}
        </div>
      </div>
    </div>
  );
}
