import React from 'react';
import {MdPlayArrow,MdInfoOutline} from "react-icons/md"
export default function Featured({type}) {
  return (
      <div className="relative overflow-hidden w-full" style={{height:"90vh"}}>
           <div className="absolute top-20 left-0 px-2 md:left-10 z-10 ">
               {
                   type&&(<div className='flex items-end'>
                       <div className='mr-4 font-medium text-white text-xl md:text-3xl rounded-md px-1' style={{background:"linear-gradient(to left,transparent 0%,rgb(0,0,0,0.2) 50%)"}}>{type==="movies"?"Movies":"Series"}</div>
                       <select name="genre" id="genre" className='bg-black focus:outline-none outline-white outline-2 text-white rounded-md px-1 py-1'>
                          <option >Genre</option>
                          <option value="adventure">Adventure</option>
                          <option value="comedy">Comedy</option>
                          <option value="drama">Drama</option>
                          <option value="horror">Horror</option>
                          <option value="sci-fi">Sci-fi</option>
                          <option value="westren">Westren</option>
                          <option value="fantasy">Fantasy</option>
                          <option value="romance">Romance</option>
                          <option value="thriller">Thriller</option>
                          <option value="animation">Animation</option>
                          <option value="historical">Historical</option>
                          <option value="decumantary">Decumentary</option>
                       </select>
                   </div>
                   )
               }
           </div>
           <div className='w-full h-full'  >
              <img src="https://www.thenews.com.pk//assets/uploads/updates/2019-10-10/539290_269048_Avengers_updates.jpg" className='w-full h-full object-cover' alt="" />
           </div>
           <div className="absolute z-10 bottom-20 md:left-10 left-0 w-full px-2">
             <div className="md:w-96 w-full h-24 ">
               <img className="w-full h-full object-fit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl-Lx67q85RhM07GTtA-08fIGh2DTVIzDVA&usqp=CAU" alt="" />
             </div>
             <div className="md:w-1/3 w-full leading-6 my-5 text-wrap text-sm text-white py-1 px-2 rounded-md" style={{background:"linear-gradient(to left,transparent 0%,rgb(0,0,0,0.2) 50%)"}}>
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
