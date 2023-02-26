import products from "../styles/Products.module.scss";
import {selectProductByCategories} from "../serves/selectProductByCategories"
import { useEffect,useState } from "react";


function SelectProducts(prop) {
    const [data,setData]=useState([]);

    useEffect(()=>{
    
        try{
            selectProductByCategories(prop.selectedData).then((data)=>{
            console.log(data);
              setData(data.data)   
                      
            }).catch((err)=>{
              console.log(err);
            }) 
            }
            catch (err){
                console.log(err);
            }
      },[prop.selectedData])

    return(
            <div className={products.productsDiv}>
               {data.map((data)=>{
                return  <div className={products.productDiv} key={data.id}> 
                    <h5 className={products.productName}>{data.name}</h5>
                    <img src={"http://localhost:5000/"+data.photo} alt=""  className={products.img}/>
                    <div className={products.productFooter}>
                        <h5>{data.price +"₪"}</h5>
                        <div className={products.AddToCart}>
                            <i className="bi bi-cart-plus-fill"></i>                        
                            <h6>add to cart</h6>
                        </div>
                    </div>
                </div>
               })}
                
                
            </div>
    )
}

export default SelectProducts