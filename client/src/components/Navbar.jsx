import React from "react";

function Navbar(){
  
  return(
    <div className="bg-transparent h-32">
      <div className="container">
      <div className="flex">
       <div className="flex">
         <div className="uppercase items-center text-red-500 text-3xl py-3 px-8 font-bold cursor-pointer">netflex</div>
         <div className="flex items-center">
           <div className="capitalize px-2 py-4 cursor-pointer">homepage</div>
           <div className="capitalize px-2 py-4 cursor-pointer">series</div>
           <div className="capitalize px-2 py-4 cursor-pointer">movies</div>
           <div className="capitalize px-2 py-4 cursor-pointer">new and popular</div>
           <div className="capitalize px-2 py-4 cursor-pointer">my list</div>
         </div>
       </div>
         <div>search</div>
       </div>
      </div>
    </div>
    )
}
export default Navbar;