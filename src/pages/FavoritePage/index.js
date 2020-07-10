import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { isAuth } from "../../helpers/storage";
import { useHistory,Link} from 'react-router-dom'
import { APIIMAGE,API } from "../../variables";

function FavoritePage() {
  const history = useHistory()
  const [favorites, setFavorites] = useState([]);
  const userId = isAuth()._id

  useEffect(() => {
    fetchFavoritedProducts();
  }, []);

  const fetchFavoritedProducts = () => {
    axios
      .post(API+"/getFavorites", {
        userFrom: isAuth() && isAuth()._id,
      })
      .then((response) => {
        if (response.data.success) {
          setFavorites(response.data.data);
        }
      });
  };
 
  const onClickDelete = (productId, userFrom) => {
    const variables = {
      productId,
      userFrom,
    };
    axios
      .post(API+"/removeFromFavorite", variables)
      .then((response) => {
        if (response.data.success) {
          fetchFavoritedProducts();
        } else {
          alert("No movies to remove");
        }
      });
  };

  return (
    <Layout>
       <button onClick={()=>history.push('/dashboard/admin')} style={{marginLeft:"40px"}} className="btn bg-primary">
          Voltar
      </button>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-2">
            Quantidade de favoritos: {favorites.length}
          </h2>
          <hr />
          <div className="container">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>FOTO DO PRODUTO</th>
                  <th>NOME DO PRODUTO</th>
                  <th>PREÇO DO PRODUTO</th>
                  <th>REMOVER DOS FAVORITOS</th>
                </tr>
              </thead>
              {favorites.map((p, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>
                        <img
                          src={`${APIIMAGE}/${p.images[0]}`}
                          style={{ height: 70, width: 70 }}
                        />
                      </td>
                      <td>{p.title}</td>
                      <td>R$: {p.price}</td>
                      <td>
                        <button
                          onClick={() => onClickDelete(p._id,userId)}
                          className="btn btn-danger"
                        >
                          REMOVER DOS FAVORITOS
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FavoritePage;
