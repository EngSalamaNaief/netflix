import React, { useRef, useState } from 'react';
import {MdArrowForwardIos,MdArrowBackIosNew} from "react-icons/md"
import ListItems from './ListItems';
export default function List() {

  const [slideNumber,setSlideNumber] = useState(0);
  const listRef=useRef(null);

  const handleClick=(dire)=>{
      
    const distance = listRef.current.getBoundingClientRect().x ;
  
    console.log(distance)
    
    if(dire=== "left"){
       listRef.current.style.transform=`translateX(${250 +distance}px)`;
    }else{
      listRef.current.style.transform=`translateX(${-250 +distance}px)`;
      
    }
  }
  return (
        <div className='py-2 overflow-hidden'>
            <div className="text-white px-2 py-4">Continue to watch</div>
            <div className='relative flex items-center'>
               <div onClick={()=>handleClick("left")} className='h-full text-4xl opacity-60 cursor-pointer bg-black text-white absolute bottom-0 left-0 flex items-center z-10'><MdArrowBackIosNew/></div>
                 <div className='flex items-center px-9' ref={listRef} style={{transform:"translateX(0px)"}}>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                    <ListItems/>
                 </div>
               
               <div onClick={()=>handleClick("right")} className='h-full text-4xl opacity-60 cursor-pointer text-white bg-black absolute bottom-0 right-0 flex items-center z-10'><MdArrowForwardIos/></div>
            </div>
        </div>
    );
}
