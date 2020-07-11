import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { API } from "../../config";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import { Container } from './styles';

function ManageCategories() {
  const history = useHistory()
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios.get(`${API}/categories`).then((response) => {
        console.log(" response data",response.data)
      if (response.data) {
        setCategories(response.data.categories);
      } else {
        alert("Nao foi possível carregar os produtos");
      }
    });
  };

  const destroy = (produto) => {
    axios.delete(`${API}/category/delete/${produto}`).then((response) => {
      alert(response.data.message);
      getCategories();
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
            Total Categories: {Categories.length}
          </h2>
          <hr />
          <div className="container">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>NOME DO CATEGORIA</th>
                  <th>EDITAR CATEGORIA</th>
                  <th>DELETAR CATEGORIA</th>
                </tr>
              </thead>
              {Categories.map((p, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td>{p.name}</td>
                      <td>
                        <button className="btn btn-info">
                          {" "}
                          <Link to={`/admin/EditCategory/${p._id}`}>
                            {" "}
                            EDITAR CATEGORIA
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => destroy(p._id)}
                          className="btn btn-danger"
                        >
                          DELETAR CATEGORIA
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

export default ManageCategories;
