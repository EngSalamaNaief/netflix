import React from 'react'
import {MdArrowBack} from "react-icons/md";
import flying from "../img/flying.mp4";
import {Link} from "react-router-dom";
import Player from 'react-player'
export default function Watch() {
  return (
    <div className='relative h-screen w-screen'  >
        <Link to="/" className='flex items-center text-lg absolute top-1 cursor-pointer z-10 text-white left-0 p-3'>
            <MdArrowBack className='mr-1 text-xl'/>
            <div >Home</div>
        </Link>
            <div className='w-full h-full '>
            
               <video src={flying} controls autoPlay={true} muted={true}  className="w-full h-full object-cover"></video>
            </div>
            
       
    </div>
  )
}
