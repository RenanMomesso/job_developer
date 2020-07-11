import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/storage";
import axios from "axios";
import Layout from "../../components/Layout";
import { API,APIIMAGE } from "../../config";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //destructure token and user from localstorage

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  //enviar form
  const clickSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    let variables = {
      name: name.charAt(0).toUpperCase() + name.slice(1)
    }
    
    axios
      .post(API+"/category/create", variables)
      .then((response) => {
        setSuccess(true);
        setError(false);
        setInterval(()=>{
          window.location.reload();
        },3000)
      })
      .catch((err) => setError(true));
    //make request to API to create category
  };

  const newCategory = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label
          className="text-muted"
          style={{ fontSize: 20, fontWeight: "bolder" }}
        >
          Category name
        </label>
        <input
          className="form-control"
          onChange={handleChange}
          value={name}
          minLength={4}
          autoFocus
          required
          placeholder="Name of the new category"
        />
      </div>
      <button className="btn btn-outline-primary">Create Category</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return (
        <h3 className="alert alert-info">New category created sucessfuly</h3>
      );
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="alert text-danger">Category should be unique</h3>;
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/dashboard/admin" className="text-warning">
        {" "}
        <button type="button" className="btn btn-outline-danger">
          {" "}
          Voltar ao menu
        </button>
      </Link>
    </div>
  );

  return (
    <Layout>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newCategory()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
