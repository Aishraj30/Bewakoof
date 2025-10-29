import { div } from 'motion/react-client';
import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { clothingData } from '../Clothes';
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../Redux/Cartslice';
import { toast } from 'react-toastify/unstyled';

const Card2 = ({name ,price,image}) => {
  let dispatch=useDispatch()
  return (
   <div>
     <div className='p-[10px] mt-[10px] flex h-[210px] w-full shadow-xl ' >
      

   <div><img className='w-[150px]' src={image} alt="" /></div>
   <div>
    <div className='flex' ><h2 className='font-bold ml-[10px]' >Bewakoof®</h2><span className='w-[50px] h-[15px]'>
  <MdDeleteForever 
    className='ml-[350px] w-[30px] h-[30px] cursor-pointer'  
    onClick={() => {
      dispatch(RemoveItem(image));
      toast("Item removed");
    }} 
  />
</span>
</div>
    <h1 className='text-[12px] ml-[10px] mt-[10px]' >{name}</h1>

 <div className='flex mt-[110px] ' > <div className='flex bg-gray-200 text-blue-500 p-[5px] ml-[15px] mr-[15px] ' > <h2 className='text-[12px]' >Size</h2>
      <select  className='text-[12px]' id="Size">
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
    </select>
  </div>


  <div className='flex text-[12px]  bg-gray-200 text-blue-500 p-[5px] ml-[15px] mr-[15px]' > <h2  >Qty</h2>
      <select id="Size">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
    </select>
  </div>
  <h2 className='flex ml-[240px] mt-[5px]'  ><FaRupeeSign className='mt-[5px]' /> {price}</h2>
  </div>
   
   </div>


    </div>
   </div>
  )
}

export default Card2
