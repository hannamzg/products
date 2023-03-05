import products from "../styles/Products.module.scss";
import { selectProductByCategories } from "../serves/selectProductByCategories";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/authContext';
import {AddToCart} from "../serves/addToCart";
import { useContext } from "react";


function SelectProducts(prop) {
  const [data, setData] = useState([]);
  const {currentUser } =useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      selectProductByCategories(prop.selectedData)
        .then((data) => {
          setData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [prop.selectedData]);


  function handleClickAddToCart(productId) {
    try{
      AddToCart(currentUser.id,productId).then((data)=>{
        console.log(data);
     }).catch((err)=>{
        console.log(err);
     })
    }
    catch(err){
      console.log(err);
    }
    
  }

  return (
    <div className={products.productsDiv}>
      {data.map((data) => {
        return (
          <div className={products.productDiv} key={data.id}>
            <h5 className={products.productName}>{data.name}</h5>
            <img
              src={"http://localhost:5000/" + data.photo}
              alt=""
              className={products.img}
              onClick={()=> navigate(`/productPage/${data.id}`)}
            />
            <div className={products.productFooter}>
              <h5>{data.price + "₪"}</h5>
              <div className={products.AddToCart} onClick={()=>handleClickAddToCart(data.id)}>
                <i className="bi bi-cart-plus-fill"></i>
                <h6 className={products.addToCartH6}>Add To Cart</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelectProducts;
