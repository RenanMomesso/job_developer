import React, { useState } from "react";
import { signin } from "../../helpers/api";
import {authenticate,isAuth} from '../../helpers/storage'
import Layout from "../../components/Layout";
import '../Signup/signup.css'


function Signup(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const variaveis = {
      email,
      password,
    };

    signin(variaveis).then((response) => {
      if (response.error) {
        setErrorMessage(response.error);
        console.log(response.error);
      } else {
        authenticate(response, ()=>{
          props.history.push('/')
        })
      }
    });
  };


  const errorShowMessage = () => (
  <div className="p-3 mb-2 bg-danger text-black mb-2" style={{display: errorMessage ? 'block' : 'none', borderRadius:3}}>{errorMessage}</div>
  )


  const signinForm = () => (
    <form onSubmit={handleSubmit} onBlur={() => setErrorMessage('')}>
      <div class="form-group">
        <label for="exampleFormControlInput1">Digite seu e-mail</label>
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
      <button className="btn bg-primary text-white" type="submit">Entrar</button>
    </form>
  );

  return (
  <Layout>
      {isAuth() ? props.history.push('/') : null}
      <div className="row">
      <div className="col-md-8 signup_formulario" >
         <h4 style={{backgroundColor:'lightgray', paddingTop:10,paddingBottom:10}}>
            Faça o seu login
           
           </h4>
        </div>
        <div className="col-md-8 signup_formulario">
          {errorShowMessage()}
          {signinForm()}</div>
      </div>
  </Layout>
  );
}

export default Signup;
