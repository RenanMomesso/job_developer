import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API,APIIMAGE } from "../../config";
import CheckBox from "./Sections/Checkbox";
import { cor, price, sexo, tamanho } from "./Sections/data";
import RadioBox from "./Sections/RadioBox";
import ColorBox from "./Sections/ColorBox";
import Genero from "./Sections/GeneroBox";
import { Icon, Col, Card, Row } from "antd";
import Images from "../Images";
import GeneroBox from "./Sections/GeneroBox";
import Carousel from "../Carousel";

function Body(props) {
  const [fotoOne, setFotoOne] = useState(0);
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [PostSize, setPostSize] = useState();
  const [aberto, setAberto] = useState(false);
  const [Aberto2, setAberto2] = useState(false);
  const [Aberto3, setAberto3] = useState(false);
  const [Aberto4, setAberto4] = useState(false);
  const [sortBy, setSortBy] = useState('')
  const [order, setOrder] = useState('')
  const [Limit, setLimit] = useState(22);
  const [Filters, setFilters] = useState({
    tamanho: [],
    sexo: [],
    cor: [],
    price: [],
  });

  
  const aparecer = () => {
    setAberto(!aberto)
  }

  const aparecer2 = () => {
    setAberto2(!Aberto2)
  }
  const aparecer3 = () => {
    setAberto3(!Aberto3)
  }
  const aparecer4 = () => {
    setAberto4(!Aberto4)
  }

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      order:order,
      sortBy:sortBy,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };

  const loadMoreHanlder = () => {
    let skip = Skip + Limit;
    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };

    getProducts(body);
    setSkip(skip);
  };

  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    console.log("array", array);
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    const getALlfilters = { ...Filters };
    getALlfilters.cor = [];
    getALlfilters.tamanho = [];
    getALlfilters.sexo = [];
    getALlfilters.price = [];

    showFilteredResults(getALlfilters);
    setFilters(getALlfilters);
    console.log(getALlfilters);
  };

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    axios.post(`${API}/getProducts`, variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([
            ...Products,
            ...response.data.products.filter(
              (item) => item.category.name === props.categoriaNome
            ),
          ]);
        } else {
          setProducts(
            response.data.products.filter(
              (item) => item.category.name === props.categoriaNome
            )
          );
        }
        setPostSize(
          response.data.products.filter(
            (item) => item.category.name === props.categoriaNome
          )
        );
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };
  const mudarFoto = (product) => {
    setFotoOne(1);
  };


  const handleClick = productId => {
    axios.put(API +'/product/click-count' ,{productId})
    
  }


  {console.log("products total", Products.length)}
  const renderCards = Products.length == 0 ? <div>Não encontrou nenhum produto com este filtro ou esta categoria, por favor, procure por outra categoria ou filtro.</div> : Products.map((product, index) => (
    <div key={index} className="card" style={{ marginTop: 20 }} onClick={e=>handleClick(product._id)}>
      <Link to={`/product/${product._id}`}>
        <div className="card_image">
          <img
            className="img_src"
            src={`${APIIMAGE}/${product.images[0]}`}
            onMouseOver={() => mudarFoto()}
            onMouseOut={() => {
              setFotoOne(0);
            }}
            />
        </div>
        <div className="card_body">
          <span className="card_body_title">{product.title}</span>
          <span className="card_body_price">R$ {product.price}</span>
        </div>
      </Link>
    </div>
  ));

  const maiorMenor = () => {
    getProducts({ order: "asc", sortBy: "price" });
  };

  const maiorMenor2 = () => {
    getProducts({ order: "desc", sortBy: "price" });
  };

  const porNome = () => {
    getProducts({ order: "asc", sortBy: "title" });
  };
  
  return (
    <>
      <div className="body_body">
        <div className="pagination">
          Página   <Link to="/">Home</Link>   {">"}   {" "}
          <Link to={`category/${props.categoriaNome}`}>
            {props.categoriaNome}
          </Link>
        </div>
        <div
          className="pagination paginatao"
          style={{
            borderBottom: "1px solid gray",
            display: "flex",
            flexDirection: "row",
            justifyContent:'space-between',
          }}
        >
          <div>{props.categoriaNome} </div>  
          <div className="botoes_opções">
            <div
              style={{
                display: "flex",
                flexDirection: "row !important",
                width: "300px",
                justifyContent: "center",
                marginLeft: "70px",
                alignItems: "center",
              }}
            >
              Ordenar por:
              <button
                className="btn btn-outline-primary"
                style={{
                  width: "55px",
                  height: "35px",
                  fontSize: "10px",
                  display: "flex",
                  marginLeft: "10px",
                  justifyContent: "center",
                  marginTop: "4px",
                  alignItems: "center",
                }}
                onClick={maiorMenor2}
              >
                Maior
              </button>{" "}
              <button
                className="btn btn-outline-primary"
                style={{
                  width: "55px",
                  height: "35px",
                  fontSize: "10px",
                  display: "flex",
                  marginTop: "4px",
                  marginLeft: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={maiorMenor}
              >
                Menor
              </button>{" "}
              <button
                className="btn btn-outline-primary"
                style={{
                  width: "55px",
                  height: "35px",
                  fontSize: "10px",
                  display: "flex",
                  marginTop: "4px",
                  marginLeft: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={porNome}
              >
                de A a Z
              </button>{" "}
            </div>
          </div>
            
        </div>
        <div className="roupascategorias">
          <div className="body_esquerda">
            <button className="btn btn-outline-primary" onClick={clearAllFilters}>
              Limpar filtros
            </button>
            <div className="filtro_quadradao">
              <div className="filtro_topo"  onClick={aparecer}>Tamanho</div>
             {aberto && (
                <div className="filtro_corpo" style={{display:aberto?'block !important':'none !important'}}>
                <div>
                  <CheckBox
                    list={tamanho}
                    handleFilters={(filters) =>
                      handleFilters(filters, "tamanho")
                    }
                  />
                </div>
              </div>
             )}
            </div>
            <div className="filtro_quadradao">
              <div className="filtro_topo" onClick={aparecer2}>Filtrar por Preço</div>
              {Aberto2 && (
                <div className="filtro_corpo">
                <div>
                  <RadioBox
                    list={price}
                    handleFilters={(filters) => handleFilters(filters, "price")}
                  />
                </div>
              </div>
              )}
            </div>
            <div className="filtro_quadradao">
              <div className="filtro_topo" onClick={aparecer3}>Filtrar por cor</div>
             {Aberto3 && (
                <div className="filtro_corpo">
                <div>
                  <ColorBox
                    list={cor}
                    handleFilters={(filters) => handleFilters(filters, "cor")}
                  />
                </div>
              </div>
             )}
            </div>
            <div className="filtro_quadradao" >
              <div className="filtro_topo" onClick={aparecer4}>Filtrar por gênero</div>
             {Aberto4 && (
                <div className="filtro_corpo">
                <div>
                  <GeneroBox
                    list={sexo}
                    handleFilters={(filters) => handleFilters(filters, "sexo")}
                  />
                </div>
              </div>
             )}
            </div>
          </div>

          {/* //////////////// body direita onde tem as cards \\\\\\\\\\\\\\\\ */}
          <div className="body_direita">{renderCards}</div>
        </div>
      </div>
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHanlder}>Carregar mais</button>
        </div>
      )}
      <br />

      <Carousel/>
    </>
  );
}

export default Body;
