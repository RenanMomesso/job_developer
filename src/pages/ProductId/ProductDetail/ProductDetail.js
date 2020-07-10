import React from "react";
import { cor, sexo, tamanho } from "./Data";
import FavoriteAction from "../../../components/FavoriteAction";
import ShareButton from "../../../components/ShareButton";
function ProductDetail(props) {
  const newNotification = () => {
    if ("Notification" in window) {
      if (Notification.permission !== "denied") {
        let title = "Roupa nova!";
        let options = {
          body: "Venha ver as novas roupas que chegaram",
        };
       new Notification(title, options);
      }
    }
  };
  const ProductId = props.productId


  const productTamanho = (size) =>
    tamanho.map((i) => (i._id === size ? i.name : null));

  const productType = (color) =>
    cor.map((i) => (i._id === color ? i.name : null));

  const productSexo = (gen) => sexo.map((i) => (i._id === gen ? i.name : null));

  const url = window.location.href;

  return (
    <div className="div_detail_product">
      <div
      className="productDetail_css"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ marginRight: "60px" }}>
          <h2 style={{color:'#3c3c6b'}}>{props.Product.title}</h2>
        </div>
      <FavoriteAction productId={ProductId} />
      <ShareButton url={url}/>
      </div>
      {newNotification()}
      <div className="productInfo_style">
        Tamanho: {productTamanho(props.Product.tamanho)}
      </div>

      <div className="productInfo_style">
        Cor: {productType(props.Product.cor)}
      </div>
      <div className="productInfo_style">
        Genero: {productSexo(props.Product.sexo)}
      </div>
      <div className="productInfo_style">
        Visualizações deste anúncio:{props.Product.views}
      </div>
      <div className="productInfo_style" style={{ color: "red" }}>
        R$: {(props.Product.price)}
      </div>
      <div className="productInfo_style">
        Categoria: {props.Product.category ? props.Product.category.name : null}
      </div>
      <div className="productInfo_style descri">
        Descrição:     {props.Product.description}
      </div>
    </div>
  );
}

export default ProductDetail;
