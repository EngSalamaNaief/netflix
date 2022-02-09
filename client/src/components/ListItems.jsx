import React, { useState } from 'react';
import flying from "../img/flying.mp4";
import {MdOutlineThumbDown,MdOutlineThumbUp,MdPlayArrow,MdAdd} from "react-icons/md";
export default function ListItems() {

  const [mouseEnter,setMouseEnter]=useState(false);

  return (
        <div onMouseEnter={()=>setMouseEnter(true)}  onMouseLeave={()=>setMouseEnter(false)} className='relative h-32 bg-white cursor-pointer' style={{width:"250px",margin:"0 5px 0 0"}}>
           <div className='w-full h-full overflow-hidden'>
              <img src="./img/nature.jpg" alt=""  className='w-full h-full object-cover'/>
           </div>
           {
              mouseEnter&&(
               <div className={`${mouseEnter?"block":"hidden"} box absolute bottom-0 left-0 w-72  z-40 text-white bg-black`} >
               <div  className='w-full h-1/4 rounded-b-md overflow-hidden'>
      
                  <video src={flying} autoPlay={mouseEnter} muted={mouseEnter} loop className='w-full h-full object-cover'/>
               </div>
               <div className='py-2 px-3'>
                 <div className='flex items-center text-white py-2 '>
                    <span className='p-1 border-2 cursor-pointer mr-3 border-white rounded-full'><MdPlayArrow/></span> 
                    <span className='p-1 border-2 cursor-pointer mr-3 border-white rounded-full'> <MdAdd/></span> 
                    <span className='p-1 border-2 cursor-pointer mr-3 border-white rounded-full'><MdOutlineThumbDown/></span> 
                    <span className='p-1 border-2 cursor-pointer mr-3 border-white rounded-full'><MdOutlineThumbUp/></span> 
                 </div>
                  <div className="flex items-center text-sm text-gray-400 py-2">
                      <span className='mr-3'>1 hour 14 mins</span>
                      <span className='px-1 border border-gray-600 mr-3 rounded'>+16</span>
                      <span>1999</span>
                  </div>
                  <p lang='10' className="text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi assumenda 
                  </p>
                  <div className='mt-2'>Action</div>
               </div>
             </div>
              )
           }
        </div>
    );
}
