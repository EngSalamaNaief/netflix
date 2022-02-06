import React from 'react';

export default function Home() {
  return (
      <div className="relative">
           <div className='w-full' style={{height:"90vh"}} >
              <img src="https://www.thenews.com.pk//assets/uploads/updates/2019-10-10/539290_269048_Avengers_updates.jpg" className='w-full h-full object-cover' alt="" />
           </div>
           <div className="absolute z-10 bottom-10 left-10">
             <div className="w-96 h-24">
               <img className="w-full h-full object-fit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl-Lx67q85RhM07GTtA-08fIGh2DTVIzDVA&usqp=CAU" alt="" />
             </div>
             <div className="w-96 my-5 text-lg text-wrap text-white">
               lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
               lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
               lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
             </div>
             <div>
              <button className="py-4 px-6 bg-gray-100 mr-3"> play</button>
              <button className="py-4 px-6 bg-gray-100 mr-3"> info</button>
              
             </div>
           </div>
      </div>
    );
}
