import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductImage from "./ProductDetail/ProductImage";
import ProdutDetail from "./ProductDetail/ProductDetail";
import { Row, Col } from "antd";
import Layout from "../../components/Layout";
import CarouselProps from "../../components/CarouselProps";
import { API } from "../../variables";

function DetailProduct(props) {
  const productId = props.match.params.id;
  const [Product, setProduct] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API}/products_by_id/?id=${productId}&type=single`
      )
      .then((response) => {
        setProduct(response.data[0]);

        setCategory(response.data[0].category._id);
      });
  }, []);
  return (
    <Layout>
      <div className="product_image" style={{ width: 500 }}>
        <br />
        <div className="product_details">
          <div className="productcarrosel">
            <ProductImage detail={Product} />
          </div>
          <div className="product_info_div">
            <ProdutDetail productId={productId} Product={Product} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 130 }}>
        <CarouselProps categoria={category} productId={productId} />
      </div>
    </Layout>
  );
}

export default DetailProduct;
