import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuth, getCookie } from "../../helpers/storage";
import { read } from "../../helpers/api";
import axios from "axios";
import { API } from "../../config";


function EditProfile() {
  const userId = isAuth()._id;
  const tokenId = getCookie().token;

  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    error: false,
    success: false,
  });

  const { address, email, error, name, password, success } = values;

  const readUser = (userId) => {
    axios.get(API+"/user/read/" + userId).then((data) => {
      if (data.data) {
        setValues({
          ...values,
          name: data.data.name,
          email: data.data.email,
          address: data.data.address,
          password: data.data.password,

        });
      }
    });
  };

  // const readUser = (userId) => {
  //   setValues({...values, error:false})
  //   read(userId).then(response => {
  //     if(response.error){
  //       console.log(response.error)
  //       setValues({...values, error:response.error})
  //     } else {
  //       setValues({...values, name:response.name})
  //     }
  //   })

  // }

  useEffect(() => {
    readUser(userId);
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    let variables = {
      name,
      password,
      email,
      address
    }
    axios.put(`${API}/user/edit/${userId}`, variables).then(response =>{
      if(response.data){
        setValues({...values, success:true})
      }

    })
  };

  const profileUpdate = (name, email, password, address) => (
    <form onBlur={() => setValues({ ...values, error: "", success: false })}>
      <div className="form-group">
        <label className="text-muted">Novo nome de usuário</label>
        <input
          autoFocus
          type="text"
          onChange={handleChange("name")}
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Digite um novo email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Novo password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          className="form-control"
          value={password}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Endereço para entregas</label>
        <input
          type="text"
          onChange={handleChange("address")}
          className="form-control"
          value={address}
        />
      </div>
      <button className="btn btn-outline-primary" onClick={clickSubmit}>
        Submit
      </button>
    </form>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Mudado com sucesso
    </div>
  );

  return (
    <div className="editar_perfil">
      {showSuccess()}
      <h1>Editar perfil</h1>
      {profileUpdate(name, email, password, address)}
    </div>
  );
}

export default EditProfile;
