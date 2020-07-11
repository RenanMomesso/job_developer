import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { APIIMAGE,API } from "../../config";

// import { Container } from './styles';

function CategoryRoupa(props) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
axios.get(API+'/category/5f0091cbaa70be1ab886948d')
.then(response =>
    {
        setProducts(response.data.produtos)
    })
  };

  const renderCards = Products.map((product, index) => (
    
    <div className="card" style={{ marginTop: 20 }}>
      <Link to={`/product/${product._id}`}>
      <div className="card_image">
        <img 
        className="img_src"
        src={`${APIIMAGE}/${product.images[0]}`}
        />
      </div>
      <div className="card_body">
        <span className="card_body_title">{product.title}</span>
        <span className="card_body_price">R$ {product.price}</span>
      </div>
        </Link>
    </div>
  ));

  return (
    <Layout>
      <div>
          {renderCards}
      </div>
      
    </Layout>
  );
}

export default CategoryRoupa;
