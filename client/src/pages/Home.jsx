import React from 'react';
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from '../components/List';
export default function Home({type}) {
  return (
      <div className="bg-black w-full overflow-hidden">
           <Navbar/>
           <Featured type={type} />
           <List/>
           <List/>
           <List/>
      </div>
    );
}
