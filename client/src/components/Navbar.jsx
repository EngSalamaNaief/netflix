import React,{useState} from "react";
import {MdSearch,MdNotifications,MdArrowDropDown,MdViewHeadline,MdClose} from "react-icons/md"
function Navbar(){
  const [dropedDowen,setDropedDowen]=useState(false);
  return(
    <div className="text-white bg-transparent h-32 fixed w-full z-40">
      <div className="md:px-10 px-2">
      <div className="flex items-center justify-between">
       <div className=" items-center flex ">
         <div className="uppercase items-center text-red-500 text-2xl md:text-3xl py-3 pr-8 font-bold cursor-pointer">netflex</div>
            <div className="md:flex hidden">
             <div className="flex items-center justify-between">
               <div className="capitalize px-2 cursor-pointer">homepage</div>
               <div className="capitalize px-2 cursor-pointer">series</div>
               <div className="capitalize px-2 cursor-pointer">movies</div>
               <div className="capitalize px-2 cursor-pointer">new and popular</div>
               <div className="capitalize px-2 cursor-pointer">my list</div>
              </div>
             </div>
       </div>
         <div className="items-center justify-between hidden md:flex">
           <div className="mx-2 text-xl cursor-pointer"><MdSearch/></div>
           <div className="mx-2 cursor-pointer">KID</div>
           <div className="mx-2 text-xl cursor-pointer"><MdNotifications/></div>
           <div className="w-6 h-8 mx_4 overflow-hidden rounded-full cursor-pointer">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPZAaK3gXPnXHy87YFc1UrZ7OdDOC3Rinvw&usqp=CAU" alt="" className="w-full h-full object-cover"/>
           </div>
           <div className="ml-2 relative">
             <MdArrowDropDown onClick={()=>setDropedDowen(!dropedDowen)}  className="text-3xl cursor-pointer"/>
             <div className={`${dropedDowen?'block':'hidden'} absolute top-10 right-0 p-3 rounded-lg bg-gray-200 text-black`}>
               <div onClick={()=>setDropedDowen(false)} className="cursor-pointer">Sittings</div>
               <div onClick={()=>setDropedDowen(false)} className="pt-2 cursor-pointer">Logout</div>
             </div>
            </div>
         </div>
         
         <div className="relative block md:hidden">
          <div onClick={()=>setDropedDowen(!dropedDowen)} className="block md:hidden cursor-pointer text-3xl"> {!dropedDowen?(<MdViewHeadline/>):(<MdClose/>)} </div>
            <div className={`md:hidden w-40 absolute top:40 mt-3 right-0 ${dropedDowen?"block":"hidden"}`}>
             <div className="bg-gray-200 py-3 px-2 text-black rounded-lg">
              <div className="flex mb-4 mt-2 items-center justify-between px-3">
               <div className="w-8 h-8 mx_4 overflow-hidden rounded-full cursor-pointer">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPZAaK3gXPnXHy87YFc1UrZ7OdDOC3Rinvw&usqp=CAU" alt="" className="w-full h-full object-cover"/>
               </div>
                <div className="mx-2 text-xl cursor-pointer"><MdSearch/></div>
               </div>
               <div onClick={()=>setDropedDowen(false)} className="capitalize px-2 py-1 cursor-pointer">homepage</div>
               <div onClick={()=>setDropedDowen(false)} className="capitalize px-2 py-1 cursor-pointer">series</div>
               <div onClick={()=>setDropedDowen(false)} className="capitalize px-2 py-1 cursor-pointer">movies</div>
               <div onClick={()=>setDropedDowen(false)} className="capitalize px-2 py-1 cursor-pointer">new and popular</div>
               <div onClick={()=>setDropedDowen(false)} className="capitalize px-2 py-1 cursor-pointer">my list</div>
               <div onClick={()=>setDropedDowen(false)} className="capitalize px-2 mb-2 mt-4 cursor-pointer">logout</div>
               
              </div>
           </div>
         </div>
         
       </div>
      </div>
    </div>
    )
}
export default Navbar;