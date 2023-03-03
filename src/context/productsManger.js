import { createContext, useEffect, useState } from "react";

export const ProductsManger = createContext();

export const AuthProducts = ({ children }) => {
  const [product,setProduct]=useState();
  
  console.log(product);

  return (
    <ProductsManger.Provider value={{product, setProduct}}>
      {children}
    </ProductsManger.Provider>
  );
};
