import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiShoppingCart } from "react-icons/ci";
import { motion } from 'motion/react';
import { div } from 'motion/react-client';
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/Cartslice';
import Cartslice from '../Redux/Cartslice';
import { toast } from 'react-toastify';


function Card ({id,category,image,company,description,price,rating})  {
  let dispatch=useDispatch()
  return (
    <div className='' >
        <motion.div 
      whileHover={{scale:1.05}}
       

   className= '  rounded-2xl hover: h-[460px]  w-[300px] shadow-2xl bg-white' >
     <div> <img src={image}alt="" /> </div>            {/*  image */}
      <div className='flex gap-[180px] ' > <h1 className='font-semibold ml-[5px]' >{company}</h1> <div className=' bg-yellow-300 h-[25px] w-[55px] mt-[5px] p-[4px] mr-[10px] rounded-2xl  flex' >
<BiSolidStar className='mt-[1px] h-[15px] w-[15px] '  /> <h1 className='mt-[-5px]' >{rating}</h1></div> </div>    {/*   company and rating */}

      <div> <h1 className='font-light text-[13px] ml-[5px]' >{description}</h1></div>           {/*  descrpiton */}
     <div className='flex mt-[-5px]' ><div className='flex font-bold mt-[15px] ml-[5px]  ' > <LiaRupeeSignSolid /> <h1>{price}</h1></div> <div className='mt-[-10px] ' ><button  className='
     cursor-pointer hover:bg-yellow-200 transform- flex ml-[110px]  rounded-2xl p-[6px] bg-yellow-300  gap-[10px] '   onClick={() => {
    dispatch(AddItem({ id, category, image, company, description, price, rating }));
    toast("Item added to cart");
  }}
 
>
    ADD TO BAG</button></div></div>         
      
    </motion.div>
    </div>
  )
}

export default Card
