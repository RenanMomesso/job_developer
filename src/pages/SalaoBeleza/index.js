import React from "react";
import "./style.css";
import Layout from "../../components/Layout";


function SalaoBeleza() {


  const imagesExamples = () => (
    <div className="images_examples">
      <div className="imagesexample_div">
        <div className="div_image1">
        <div className="div_descr">MAKE UP</div>
        </div>
      </div>
     <div className="imagesexample_div">
        <div className="div_image2">
        <div className="div_descr">HAIRSTYLE</div>
        </div>
      </div>
     <div className="imagesexample_div">
        <div className="div_image3">
        <div className="div_descr">NAILS</div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="cor_de_fundo_salao">
        <div className="horarios">
          <div className="box_horarios">
            <div>
              <i
                class="fa fa-clock-o"
                style={{
                  height: 20,
                  fontSize: 50,
                  marginRight: 10,
                  color: "gray",
                }}
                aria-hidden="true"
              ></i>
            </div>
            <div style={{ flexDirection: "column", display: "flex" }}>
              <div>Horario de funcionamento</div>
              <span>Segunda a Sábado: 09:00 às 18:00</span>
            </div>
          </div>
          <div className="box_horarios">
            <div>
              <i
                class="fa fa-home"
                style={{
                  height: 20,
                  fontSize: 50,
                  marginRight: 10,
                  color: "gray",
                }}
                aria-hidden="true"
              ></i>
            </div>
            <div style={{ flexDirection: "column", display: "flex" }}>
              <div>Localização</div>
              <span>Avenida nove de julho - Piracicaba - sp</span>
            </div>
          </div>{" "}
          <div className="box_horarios">
            <div>
              <i
                class="fa fa-calendar"
                style={{
                  height: 20,
                  fontSize: 50,
                  marginRight: 10,
                  color: "gray",
                }}
                aria-hidden="true"
              ></i>
            </div>
            <div style={{ flexDirection: "column", display: "flex" }}>
              <div>Agende um horário</div>
              <span>whatsapp: 289182982</span>
              <span>ou cliquei aqui: link</span>
            </div>
          </div>
        </div>
        <div className="salao_de_beleza">
          <div className="box_esquerdo_texto">
            <h1>Espaço salão de beleza</h1>
            <small className="box_small">
              Um espaço perfeito para você relaxar, arrumar seu cabelo, unhas,
              maquiagem e pele com profissionais especializados e apaixonados em
              estéticas.
            </small>
          </div>
          <div className="div_image_ladotexto">
            <img
              src="/assets/salao_de_beleza.jpg"
              alt="salao de beleza"
              style={{ objectFit: "fill", height: 400, width: "100%" }}
            />
          </div>
        </div>
        <div>{imagesExamples()}</div>
      </div>
    </Layout>
  );
}

export default SalaoBeleza;
