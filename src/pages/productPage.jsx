import { useEffect, useState } from "react";
import ProductPageStyle from "../styles/ProductPage.module.scss";
import {getProductByName} from '../serves/getProductByName';
import {  useParams } from "react-router-dom";

function ProductPage() {
  const [seletedProduct,setSeletedProduct]=useState();
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
  },[])
 
    
 if (seletedProduct) {
  return (
    <div style={{backgroundColor:"#10002b"}}>
        <div className={ProductPageStyle.div}>
          <h3 className={ProductPageStyle.nameTitle}>{seletedProduct.name}</h3>
          <img src={"http://localhost:5000/" +seletedProduct.photo}alt="" className={ProductPageStyle.image}/>
          <p className={ProductPageStyle.decripshin}>{seletedProduct.description}</p>
          <div className={ProductPageStyle.footer}>
            <h3>{"₪" +seletedProduct.price}</h3>
            <button className={ProductPageStyle.btn}>
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
