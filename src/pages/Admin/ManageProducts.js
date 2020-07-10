import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { API, APIIMAGE } from "../../variables";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import { Container } from './styles';

function ManageProducts() {
  const history = useHistory()
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.post(`${API}/getProducts`).then((response) => {
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        alert("Nao foi possível carregar os produtos");
      }
    });
  };

  const destroy = (produto) => {
    axios.delete(`${API}/deleteproduct/${produto}`).then((response) => {
      alert(response.data.message);
      getProducts();
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
            Total Products: {Products.length}
          </h2>
          <hr />
          <div className="container">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>FOTO DO PRODUTO</th>
                  <th>NOME DO PRODUTO</th>
                  <th>PREÇO DO PRODUTO</th>
                  <th>EDITAR PRODUTO</th>
                  <th>DELETAR PRODUTO</th>
                </tr>
              </thead>
              {Products.map((p, i) => {
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
                        <button className="btn btn-info">
                          {" "}
                          <Link to={`/admin/product/update/${p._id}`}>
                            {" "}
                            EDITAR PRODUTO
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => destroy(p._id)}
                          className="btn btn-danger"
                        >
                          DELETAR PRODUTO
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

export default ManageProducts;
