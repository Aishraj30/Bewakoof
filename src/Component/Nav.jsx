import React, { useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { dataContext } from '../Context/Usercontext';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const { Cart, setCart } = useContext(dataContext);
  let items = useSelector(state => state.cart);

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <div className='w-screen h-[70px] shadow-lg flex justify-center items-center gap-[80px] mt-[30px]'>
        <img className='h-[25px]' src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="logo" />

        <div className='rounded-md shadow-md flex h-[45px] w-[40rem] bg-[#EAEAEA]'>
          <CiSearch className='h-[25px] w-[25px] mt-[9px] ml-[20px]' />
          <input className='w-[35rem] ml-[10px] text-[14px] outline-none bg-[#EAEAEA]' type="text" placeholder='Search by Products' />
        </div>

        <NavLink to="/login">Login</NavLink>

        <div onClick={() => setCart(!Cart)} className="cursor-pointer relative">
          <MdOutlineShoppingBag className="h-6 w-6" />
          <span className="absolute -top-2 left-3 ml-[9px] text-s text-black font-bold">{items.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
