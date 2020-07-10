import React, { useState } from "react";
import { signup } from "../../helpers/api";
import Layout from "../../components/Layout";
import "./signup.css";

function Signup(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const variaveis = {
      name,
      email,
      password,
    };

    signup(variaveis).then((response) => {
      if (response.error) {
        setErrorMessage(response.error);
        console.log(response.error);
      } else {
        props.history.push("/signin");
      }
    });
  };

  const errorShowMessage = () => (
    <div
      className="p-3 mb-2 bg-danger text-black mb-2"
      style={{ display: errorMessage ? "block" : "none", borderRadius: 3 }}
    >
      {errorMessage}
    </div>
  );

  const signupForm = () => (
    <form onSubmit={handleSubmit} onBlur={() => setErrorMessage("")}>
      <div class="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          class="form-control"
          id="password"
          placeholder="name@example.com"
        />
      </div>
      <button className="btn bg-primary text-white" type="submit">
        Cadastrar
      </button>
    </form>
  );

  return (
    <Layout>
      <div className="row">
          <div className="col-md-8 signup_formulario" >
         <h4 style={{backgroundColor:'lightgray', paddingTop:10,paddingBottom:10}}>
            Cadastra-se
           
           </h4>
        </div>
        <div className="col-md-8 signup_formulario">
          {errorShowMessage()}
          {signupForm()}
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
