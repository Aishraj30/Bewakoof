import React from 'react'
import { Routes } from 'react-router-dom'
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'

const Login = () => {

    const {register , handlesubmmit} = useForm()

  return (
    <div>
    <nav  className=' flex ml-[100px] mt-[50px] '  ><img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" />
    <div className='  text-[20px] ml-[10px] mt-[15px] font-bold'  >a Bewakoof दिल का अनुसरण करता है</div>
    </nav>

    <div className='flex ' >
<img src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg" className='h-[60em] mt-[20px] ml-[100px]' alt="" />
    <form className='border-solid border-black border-[1px] rounded-xl ml-[40px] p-[40px] h-[500px] w-[40%] mt-[40px]  '  > 
        <h1>Join us now to be a part of Bewakoof® family.</h1>
        <input
        {...register("username")}
        type="text"
        placeholder='Username'
        className="w-[500px] text-3xl mb-5 mt-[20px] border-solid border-[1px] border-gray-500  rounded-xl p-2 border-b outline-0"
        
        
        />
        
         <input
        {...register("password")}
        type="password"
        placeholder='Password'
        className="w-[500px] text-3xl  p-2 mt-[20px] mb-5 border-solid border-[1px] border-gray-500  rounded-xl border-b outline-0"
        
        
        /> 
 <p className="mt-3">
              Don't have an account?{" "}
                <Link className="text-blue-400" to="/signup">
                    Signup
                </Link>
            </p>

        </form>
        </div>
    </div>
  )
}

export default Login
