import React from 'react';
import {MdArrowForwardIos,MdArrowBackIosNew} from "react-icons/md"
import ListItems from './ListItems';
export default function List() {
  return (
        <div className='w-full py-2 overflow-hidden relative'>
            <div className="text-white px-2 py-4">Continue to watch</div>
            <div className='relative flex items-center' style={{width:"100vw"}}>
               <div className='h-full text-5xl opacity-60 cursor-pointer bg-black text-white absolute bottom-0 left-0 flex items-center z-10'><MdArrowBackIosNew/></div>
                 <div className='grid grid-cols-5'  style={{width:"100vw"}}>
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
               
               <div className='h-full text-5xl opacity-60 cursor-pointer text-white bg-black absolute bottom-0 right-0 flex items-center z-10'><MdArrowForwardIos/></div>
            </div>
        </div>
    );
}
