import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import MenuAdmin from "../../components/MenuAdmin"


function Admin() {


  
  return (
    <Layout>
      <div>

          <MenuAdmin />
      </div>
    </Layout>
  );
}

export default Admin;
