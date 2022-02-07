import React from 'react';
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from '../components/List';
export default function Home() {
  return (
      <div className="bg-black">
           <Navbar/>
           <Featured />
           <List/>
           <List/>
           <List/>
      </div>
    );
}
