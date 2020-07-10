import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import EditProfile from '../EditProfile';

const adminLinks = () => {
    return (
      
      <div className="linkings">
        <h4 className="card-header">PÁGINA DO ADMINSTRADOR</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/createCategory">
              CRIAR CATEGORIA
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/createproduct">
              CADASTRAR NOVO PRODUTO
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/orders">
                VER PEDIDOS
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/products">
                GERENCIAR PRODUTOS
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/admin/categories">
                GERENCIAR CATEGORIAS
            </Link>
          </li>
          
        </ul>
      </div>
    );
  };

function MenuAdmin() {
  return (
    <div className="adminlinks">
      <div style={{marginRight:'200px'}}>

{adminLinks()}
      </div>
      <div>
    <EditProfile/>
      </div>

    </div>
  )
}

export default MenuAdmin;