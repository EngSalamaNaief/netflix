import React from 'react';
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from '../components/List';
export default function Notfound({type}) {
  return (
      <div className="bg-black w-full h-screen overflow-hidden">
           <Navbar/>
           <div className="flex items-center justify-center h-full">
             <div className="text-4xl font-bold text-red-600 flex items-center justify-center">404 page not found</div>
           </div>
      </div>
    );
}