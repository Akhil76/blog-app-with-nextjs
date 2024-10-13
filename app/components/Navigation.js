"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


const menuItems =[
      {
        Id:"1",
        label:"Home",
        href:"/"
      },
      {
        Id:"21",
        label:"Electronics",
        href:"/electronics"
      },
      {
        Id:"21",
        label:"Furnitures",
        href:"/furnitures"
      },
      {
        Id: "3",
        label: "Furnitures",
        href: "/furnitures",
        submenu: [
          { Id:"1",label: "Chairs", href: "/furnitures/chairs" },
          { Id:"2",label: "Tables", href: "/furnitures/tables" }
        ]
      
      },
    ]
 
export default function Navigation() {
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

  console.log(categories)
    return (
      <nav className="w-full bg-[#232F3E] text-white py-2">
        {
          
          categories.map((item)=>(
            <Link 
            href={item.Name}
            className="mx-2 hover:border border border-transparent hover:border-white p-2"
            >
              {item.Name}
            </Link>
          ))
        }
      </nav>
    );
  }
 