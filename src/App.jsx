import React from 'react';
import logo from "./assets/Bewakoof_logo.png";
import { ToastContainer } from "react-toastify";
import Usercontext from './Context/Usercontext';
import Mainroutes from './routes/Mainroutes';// ✅ Import your route component

function App() {


  
  return (
    <Usercontext>
      <Mainroutes />  {/* ✅ Use routes instead of static Home */}
     <div className='mt-[500px]' > <  ToastContainer
       position="top-center"           // Center of the screen horizontally
  autoClose={3000}                // Auto close after 3 sec
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover /></div>
    </Usercontext>
  );
}

export default App;