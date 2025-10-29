import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazyWithDelay } from "../Utils/lazyWithDelay"; // ✅ correct path


import LoadingSpinner from "../Component/LoadingSpinner";
const Home = lazyWithDelay(() => import("../page/Home"), 2000); // 2s delay
const Login = lazyWithDelay(() => import("../page/Login"), 2000);
const Signup =lazyWithDelay(()=>import('../page/Signup'),2000)   

const Mainroutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Mainroutes;

