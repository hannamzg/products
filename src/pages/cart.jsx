import cartStyle from "../styles/cart.module.scss"
import {getCartProducts} from '../serves/getCartProducts'
import { useEffect, useState } from "react";
import { useContext } from "react";
import {AuthContext} from '../context/authContext';

function Cart() {
  const {currentUser } =useContext(AuthContext);
  const [products,setProducts]=useState();

  useEffect(()=>{
    try{
      getCartProducts(currentUser.id).then((data)=>{
        setProducts(data)
      }).catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    }
    
  },[])

  return (
  <div className={cartStyle.body}>
      <h1 className={cartStyle.title}>Cart</h1>
      <div className={cartStyle.items}>
        {products&&products.data.map((data,index)=>{
           return <div className={cartStyle.item} key={index}>
            <img src={"http://localhost:5000/" + data.photo} alt="" className={cartStyle.img}/>
            <div className={cartStyle.divHaveDicAndDelet}>
              <div style={{display:"flex"}}>
                <div className={cartStyle.itemsDiv}>
                  <div>name</div>
                  <h3 className={cartStyle.itemName}>{data.name}</h3>
                </div>
                <div className={cartStyle.itemsDiv}>
                  <div>price</div>
                  <h3 className={cartStyle.itemPrice}>{data.price}</h3>
                </div>
              </div>
              <div>
                <i  className="bi bi-trash3-fill"></i>
              </div>
            </div>
          </div>
        })}
      </div>
  </div> 
  );
}

export default Cart;
