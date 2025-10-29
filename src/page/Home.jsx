
import React from 'react'
import Catergories from '../Catergories'



import { motion } from 'motion/react'

import Usercontext from '../Context/Usercontext';

import { useContext } from 'react';
import { useState } from 'react';


import Nav from '../Component/Nav';
import Card from '../Component/Card';
import { clothingData } from '../Clothes'; 
import { dataContext } from '../Context/Usercontext'; // ✅ correct context import
import { IoMdClose } from 'react-icons/io';
import Card2 from '../Component/Card2';
import AutoSlider from '../Component/Autoslider';
import { useSelector } from 'react-redux';
import { RemoveItem } from '../Redux/Cartslice';

 



function Home  () {


      const [cat, setcat,] = useState(clothingData)
    const { Cart, setCart } = useContext(dataContext);

  

function filter(Catergories){
    if(Catergories==="ALL"){
        setcat(clothingData)
    }else{
       let newlist = clothingData.filter((item)=>(item.category===Catergories))
       setcat(newlist)
    }
}

let items=useSelector(state=>state.cart )
console.log(items);


  return (
    <div className='' >
      <  Nav/>
      <motion.div 
   whileHover={{scale:1.02}}
      
      
      

      className=' sticky top-[70px]  z-50  flex cursor-pointer-- flex-wrap justify-center bg-yellow-300 h-[40px] items-center gap-[125px]  text-[20px]  mt-[30px]' >
       

{Catergories.map((item) => {
  return (
    <div
      key={item.name}
      className=''
      onClick={() => filter(item.name)}
    >
      {item.name}
    </div>
  );
})}




      </motion.div>
<div className='flex mt-[30px]' >
<AutoSlider/>


</div>



<div  className='sticky top-[111px]  z-50 ' ><h1 className='text-[40px] flex mb-[50px] justify-center items-center font-bold mt-[30px] bg-white  ' >HOT PICKS :</h1></div>


     <div className='flex flex-wrap gap-[30px] justify-evenly mt-[20px] ' >
        {cat.map((item)=>(
            <Card  key={item.id} category={item.category} image={item.image} company={item.company} description={item.description} rating={item.rating} price={item.price}  />
        )
        )}
     </div>







<div className={`fixed top-0 right-0 h-full w-[650px] bg-white shadow-lg z-50 transition-transform duration-300 ${Cart? 'translate-x-0' : 'translate-x-full'}`}>
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">My Bag</h2>
          <IoMdClose
            onClick={()=> setCart(!Cart)}
            className="cursor-pointer text-2xl"
          />

        </header>
        <div >
       {items.map((item)=>(
        <Card2 name={item.description} price={item.price} image={item.image} />
       ))}
        
        </div>
      </div>


    </div>
  )
}

export default Home
