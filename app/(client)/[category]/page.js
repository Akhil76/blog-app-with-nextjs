"use client";
import { useEffect, useState } from "react";


export default function Category({params}) {
  const {category} = params;
    
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <h1>{category}</h1>
      </div>
    </div>
  );
}
