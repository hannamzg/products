import products from "../styles/Products.module.scss";
import { useNavigate } from "react-router-dom";
import {ProductsManger} from "../context/productsManger"
import { useContext } from "react";

function Products(prop) {
  const navigate = useNavigate();
  const {setProduct} = useContext(ProductsManger)

  return (
    <div className={products.productsDiv}>
      {prop.data ? (
        prop.data.map((data) => {
          return (
            <div className={products.productDiv} key={data.id}>
              <h5 className={products.productName}>{data.name}</h5>
              <img
                src={"http://localhost:5000/" + data.photo}
                alt=""
                className={products.img}
                onClick={()=> {
                  navigate(`/productPage/${data.id}`)
                  setProduct(data)
                }}
              />
                <div className={products.productFooter}>
                  <h5>{"₪" + data.price}</h5>
                  <div className={products.AddToCart}>
                    <i className="bi bi-cart-plus-fill"></i>
                    <h6>Add To Cart</h6>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div class={products.loader}></div>
      )}
    </div>
  );
}

export default Products;
