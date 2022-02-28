import React, { useEffect, useState } from 'react';
import {productData} from '../../domyData';
import {GetALLMovie} from '../../redux/actions/MoveAction';
import {MdDeleteOutline} from "react-icons/md"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
function MovieList({GetALLMovie,allMovies}) {
  const [sellected,setSellected] = useState([]);
  const [reload,setReload] = useState(false);
  const [products,setProducts] =useState(allMovies);
  const [sortedProducts,setSortedProducts] =useState(products);

  useEffect(()=>{
    setSortedProducts(products);
      
  },[reload,products])
  useEffect(()=>{
    GetALLMovie();
    
  },[])

  const sortByName=()=>{
  
    const product= productData.sort(function(a, b){
      const x =a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setProducts(product);
    setReload(!reload)
  }
  const sortByEmail=()=>{
    const user= productData.sort(function(a, b){
      const x = a.email.toLowerCase();
      const y = b.email.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setProducts(user);
    setReload(!reload)
    console.log(products)
  }
  const sortByTransaction=()=>{
    setProducts(productData.sort(function(a,b){
      return a.transaction-b.transaction;
    }))
    setReload(!reload)
    //console.log(user)
  }

  const deleteUser=(id)=>{
    setProducts(products.filter(user=>user.id !== id));
    setReload(!reload)
  }
  
  const handleSellect=(id,value)=>{
     let checkedItems=[];
     if(value===true){
    if(sellected.filter(items=>items.id ===id).length){
        checkedItems =sellected.filter(items=>items.id !==id);
        setSellected([...checkedItems,{id,value}])
      }else{
      setSellected([...sellected,{id,value}])

    }
  }else{
    checkedItems =sellected.filter(items=>items.id !==id);
    setSellected([...checkedItems])
  }
  }
 
  const handleChecked=(id)=>{
    const ch=sellected.find(items=>items.id ===id);
    if(ch){
         return ch.value     
    }else{
      return false
    }
  }
  const sellectAll=()=>{
    if(!sellected.length){
        
      productData.forEach(user=>{
       
        setSellected(pre=>[...pre,{id:user.id,value:true}])
      })
    }else{
      setSellected([])
    }
  }

  const deleteAll=()=>{
    let dUser=[...products]  
    if(sellected.length){
      sellected.forEach(user=>{
        dUser=dUser.filter(item=>item.id !==user.id);
      })
      setProducts(dUser);
      setReload(!reload);
    }
    setSellected([]);
  }
  console.log(sellected);
  return (
  <div className='pt-10'>
      <div className="p-4">
     <div className="p-4 box">
     <div className="capitalize pb-2 text-lg font-semibold "> Users List</div>
         <table className="w-full " style={{borderSpacing:"20px"}}>
           <thead>
             <tr className=" ">
                    <th className="py-2 "> 
                     <div className="flex items-center">
                       <input type="checkbox" className='cursor-pointer'  onChange={()=>sellectAll()} checked={sellected.length?true:false} />
                       
                     </div>
                     </th>
                    <th ><div onClick={()=>sortByName()} className='cursor-pointer'>Movie</div></th>
                    <th ><div onClick={()=>sortByEmail()} className='cursor-pointer'>Genre</div></th>
                    
                    <th ><div onClick={()=>sortByTransaction()} className='cursor-pointer'>year</div> </th>
                    <th ><div onClick={()=>sortByTransaction()} className='cursor-pointer'>Type</div> </th>
                    <th className="cursor-pointer ">
                      <div onClick={()=>deleteAll()}>{sellected.length? "Delete":"Action"}</div>
                    </th>
             </tr>
           </thead>
           <tbody>
            {sortedProducts?sortedProducts.map(product=>(
              <tr key={product._id} className="text-base font-normal">
               <th className='font-normal p-2'> 
                <div className='flex items-center'>
                    <input type="checkbox" className='cursor-pointer' checked={handleChecked(product.id)} onChange={((e)=>handleSellect(product.id,e.target.checked))} />
                    
                  </div>
               </th>
               <th className="font-normal p-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src={product.img} alt="na" />
                  </div>
                    <div className="">
                        <div className="capitalize text-normal">{product.title}</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal p-2 text-gray-700">
                 <div>{product.genre}</div>
               </th>
               <th  className="font-normal p-2 text-gray-700">
                 <div>{product.year}</div>
               </th>
               <th  className="font-normal p-2 text-gray-700">
                 <div>{ product.isSeries?"Series":"Movie"}</div>
               </th>

               <th  className="font-normal flex items-center px-2 py-4">
                 <Link to={{pathname:"/dashboard/movieupdate/"+product._id,movie:product}} className="bg-green-500 cursor-pointer w-fit px-2 rounded-lg text-white">
                   Edit
                   </Link>
                   <div onClick={()=>deleteUser(product._id)} className="text-2xl cursor-pointer w-fit px-2 rounded-lg text-red-500">
                     <MdDeleteOutline/>
                   </div>
               </th>
             </tr>
            )):"" 
            }
            </tbody>
         </table>
     </div>
  </div>
  </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    allMovies:state.movieState.allMovies
  }
}
export default connect(mapStateToProps,{GetALLMovie})(MovieList)