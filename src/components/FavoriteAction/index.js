import React, { useState, useEffect } from "react";
import { isAuth } from "../../helpers/storage";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import axios from "axios";
import { API, APIIMAGE } from "../../config";

function FavoriteAction(props) {
  const userId = isAuth() ? isAuth()._id : null;
  const productId = props.productId;
  const productName = props.ProductTitle;
  const productPath = window.location.href

  let variables = {
    userFrom: userId,
    productId,
    productName,
    productPath
  };

  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [favorited, setFavorited] = useState(false);

  

 

  useEffect(() => {
      axios
      .post(API+"/favoriteNumber", variables)
      .then((response) => {
        if (response.data.success) {
          setFavoriteNumber(response.data.favoriteNumber);
        } else {
          alert(
            "Não foi possível calcular o numero de curtidas para este conteúdo"
          );
        }});


      axios
      .post(`${API}/favorited`, variables)
      .then((response) => {
        if (response.data.success) {
          setFavorited(response.data.favorited);
        } else {
          alert("Fail");
        }
      });
  }, []);





  const handleFavorite = () => {
    if (favorited) {
      axios
        .post(API +"/removeFromFavorite", variables)
        .then((data) => {
          if (data.data.success) {
            setFavorited(false);
            setFavoriteNumber(favoriteNumber - 1);
          }
        });
    } else {
      axios
        .post(API+"/addToFavorite", variables)
        .then((response) => {
          if (response.data.success) {
            setFavorited(true);
            setFavoriteNumber(favoriteNumber + 1);
          }
        });
    }
  };

  return (
    <div style={{ cursor: "pointer",fontSize:25,marginRight:10 }}>
      <div onClick={handleFavorite}>
        {favorited ? <HeartFilled style={{color:'red',fontSize:25}}/> : <HeartOutlined/>}
           
        {favoriteNumber}
      </div>
    </div>
  );
}

export default FavoriteAction;
