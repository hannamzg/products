import products from "../styles/Products.module.scss"


function Products(prop) {

    return(
            <div className={products.productsDiv}>
               {prop.data ?prop.data.map((data)=>{
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
               }):<div class={products.loader}></div>}
                
                
            </div>
    )
}

export default Products