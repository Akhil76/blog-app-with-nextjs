"use client";
import { useEffect, useState } from "react";


export default function Category() {
    const [categories, SetCategories] = useState({}); // Initialize as an array

    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/category", {
          method: "GET",
        });
        const data = await res.json();
        SetCategories(data.data); // Set the 'data' array to state
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getCategories();
    }, []);
  
    console.log(categories);
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <h1>Category</h1>
        <div>
            {
                categories.map((i)=>(
                    <p>{i.Name}</p>
                ))
            }
        </div>
      </div>
    </div>
  );
}
