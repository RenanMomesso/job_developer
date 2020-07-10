import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

function User() {

    const adminLinks = () => {
        return (
          <div className="card linkings">
            <h4 className="card-header">User links</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <Link className="nav-link" to="/create/category">
                  Configurações
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="nav-link" to="/admin/createproduct">
                  Create Product
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="nav-link" to="/admin/orders">
                    View Orders
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="nav-link" to="/admin/products">
                    Manage Products
                </Link>
              </li>
              <li className="list-group-item">
                <Link className="nav-link" to="/admin/categories">
                    Manage Categorys
                </Link>
              </li>
              
            </ul>
          </div>
        );
      };



  return(
      <Layout>
          {adminLinks()}
      </Layout>
  )
}

export default User;