import React from 'react';
import {MdPlayArrow,MdInfoOutline} from "react-icons/md"
export default function Home() {
  return (
      <div className="relative overflow-hidden" style={{height:"90vh"}}>
           <div className='w-full h-full'  >
              <img src="https://www.thenews.com.pk//assets/uploads/updates/2019-10-10/539290_269048_Avengers_updates.jpg" className='w-full h-full object-cover' alt="" />
           </div>
           <div className="absolute z-10 bottom-20 left-10 w-full">
             <div className="w-96 h-24">
               <img className="w-full h-full object-fit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl-Lx67q85RhM07GTtA-08fIGh2DTVIzDVA&usqp=CAU" alt="" />
             </div>
             <div className="w-1/3 leading-6 my-5 text-wrap text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, labore voluptates soluta doloremque eaque quam ea ipsum. Fugit id dignissimos rerum numquam doloremque culpa, odit voluptatum quas! Cupiditate, quod nulla.
             </div>
             <div className='flex items-center'>
              <button className="py-1.5 rounded-md px-5 bg-gray-100 mr-3 font-medium flex items-center justify-center"> <MdPlayArrow className='mr-1'/> Play</button>
              <button className="py-1.5 rounded-md bg-gray-500 text-white px-5 font-medium flex items-center justify-center"><MdInfoOutline className="mr-1"/> Info</button>
              
             </div>
           </div>
      </div>
    );
}
