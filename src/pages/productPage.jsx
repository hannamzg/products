import { useEffect, useState } from "react";
import ProductPageStyle from "../styles/ProductPage.module.scss";
import {getProductByName} from '../serves/getProductByName';
import { useParams } from "react-router-dom";
import {AddToCart} from "../serves/addToCart";
import { useContext } from "react";
import {AuthContext} from '../context/authContext';
import{ProductsManger} from '../context/productsManger'
import { toast } from "react-toastify";

function ProductPage() {
  const [seletedProduct,setSeletedProduct]=useState();
  const {currentUser } =useContext(AuthContext);
  const {setAddToCartInfoChange } =useContext(ProductsManger);
  const { id } = useParams();

  useEffect(()=>{    
    try{
      getProductByName(id).then((data)=>{
        setSeletedProduct(data.data[0])
      }).catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    } 
  },[id])

  function handleClickAddToCart(productId) {
    try{
      AddToCart(currentUser.id,productId).then((data)=>{
      setAddToCartInfoChange(true)
      toast(data.data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     }).catch((err)=>{
      toast(err.response.data
        , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     })
    }
    catch(err){
      toast(err.response.data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
  }

  
    
 if (seletedProduct) {
  return (
    <div  className={ProductPageStyle.bigDiv}>
        <div className={ProductPageStyle.div}>
          <h3 className={ProductPageStyle.nameTitle}>{seletedProduct.name}</h3>
          <img src={"http://localhost:5000/" +seletedProduct.photo}alt="" className={ProductPageStyle.image}/>
          <p className={ProductPageStyle.decripshin}>{seletedProduct.description}</p>
          <div className={ProductPageStyle.footer}>
            <h3>{"₪" +seletedProduct.price}</h3>
            <button className={ProductPageStyle.btn} onClick={()=>handleClickAddToCart(seletedProduct.id)}>
              <i className="bi bi-cart-plus-fill" id={ProductPageStyle.iconAdd}></i>
              <h6 className={ProductPageStyle.AddTitle}>Add To Cart</h6>
            </button>
          </div>
        </div>
      </div>   
    );
} 
else{
  <div class={ProductPageStyle.loader}></div>
}
  

 
}

export default ProductPage;
