import React from "react";
import {MdSearch,MdNotifications,MdArrowDropDown} from "react-icons/md"
function Navbar(){
  
  return(
    <div className="bg-transparent h-32 fixed w-full">
      <div className="container mx-auto">
      <div className="flex items-center">
       <div className="flex items-center ">
         <div className="uppercase items-center text-red-500 text-3xl py-3 px-8 font-bold cursor-pointer">netflex</div>
         <div className="flex items-center justify-between">
           <div className="capitalize px-2 cursor-pointer">homepage</div>
           <div className="capitalize px-2 cursor-pointer">series</div>
           <div className="capitalize px-2 cursor-pointer">movies</div>
           <div className="capitalize px-2 cursor-pointer">new and popular</div>
           <div className="capitalize px-2 cursor-pointer">my list</div>
         </div>
       </div>
         <div className="flex items-center justify-between">
           <div><MdSearch/></div>
           <div>KID</div>
           <div><MdNotifications/></div>
           <div className="w-8 h-8 overflow-hidden rounded-lg">
             <img src="" alt="" className="w-full h-full object-cover"/>
           </div>
           <div><MdArrowDropDown/></div>
         </div>
       </div>
      </div>
    </div>
    )
}
export default Navbar;