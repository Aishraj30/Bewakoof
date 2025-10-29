import React, { createContext, useState } from 'react';


export const dataContext = createContext();

function Usercontext({ children }) {
  let [Cart, setCart] = useState(false);

  return (
    <dataContext.Provider value={{ Cart, setCart }}>
      {children}
    </dataContext.Provider>
  );
}

export default Usercontext;
