import React from 'react';
import './style.css'

// import { Container } from './styles';

function NewsLetter() {
  return (
    <section className="newsletter">
    <div className="container">
    <div className="row">
    <div className="col-sm-12">
        <div className="content">
            <h2>RECEBA TODAS AS NOSSAS NOVIDADES</h2>
        <div className="input-group">
             <input type="email" className="form-control" placeholder="exemploemail@hotmail.com"/>
             <span className="input-group-btn">
             <button className="btn" type="submit">INSCREVA-SE</button>
             </span>
              </div>
        </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default NewsLetter;