import ProductPageStyle from "../styles/ProductPage.module.scss";

function ProductPage(prop) {
  return (
    <div style={{backgroundColor:"#10002b"}}>
      <div className={ProductPageStyle.div}>
        <h3 className={ProductPageStyle.nameTitle}>{prop.selectedProduct.name}</h3>
        <img src={"http://localhost:5000/" +prop.selectedProduct.photo}alt="" className={ProductPageStyle.image}/>
        <p className={ProductPageStyle.decripshin}>{prop.selectedProduct.description}</p>
        <div className={ProductPageStyle.footer}>
          <h3>{"₪" +prop.selectedProduct.price}</h3>
          <button className={ProductPageStyle.btn}>
            <i className="bi bi-cart-plus-fill" id={ProductPageStyle.iconAdd}></i>
            <h6 className={ProductPageStyle.AddTitle}>Add To Cart</h6>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default ProductPage;
