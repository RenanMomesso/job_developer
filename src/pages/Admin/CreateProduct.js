import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import Layout from "../../components/Layout";
import { useHistory } from "react-router-dom";
import './style.css'
import { API,APIIMAGE } from "../../variables";


function CreateProduct() {
  const history = useHistory();
  const Coris = [
    { key: 1, value: "Vermelho" },
    { key: 2, value: "Azul" },
    { key: 3, value: "Roxo" },
    { key: 4, value: "Amarelo" },
    { key: 5, value: "Preto" },
    { key: 6, value: "Banco" },
    { key: 7, value: "Rosa" },
    { key: 8, value: "Verde" },
    { key: 9, value: "Marrom" },
  ];
  const gener = [
    { key: 1, value: "Masculino" },
    { key: 2, value: "Feminino" },
    { key: 3, value: "Unisex" },
  ];
  const size = [
    { key: 1, value: "PP" },
    { key: 2, value: "P" },
    { key: 3, value: "M" },
    { key: 4, value: "G" },
    { key: 5, value: "GG" },
    { key: 6, value: "L" },
  ];

  const [Preco, setPreco] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Cores, setCores] = useState(1);
  const [Sexo, setSexo] = useState(1);
  const [Tamanho, setTamanho] = useState(1);
  const [Images, setImages] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [CategoriesValue, setCategoriesValues] = useState("")

  const getAllCategories = () => {
    axios
      .get(API+"/categories")
      .then((response) => {
        setCategories(response.data.categories)
        console.log(response.data.categories)
      }).catch(err => console.log(err))
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);
    console.log(...formData);
    axios
      .post(API+"/product/image", formData, config)
      .then((response) => {
        if (response.data.success) {
          setImages([...Images, response.data.filePath]);
          console.log(Images);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const variables = {
      title: Title.charAt(0).toUpperCase() + Title.slice(1),
      price: Preco,
      description: Description.charAt(0).toUpperCase() + Description.slice(1),
      images: Images,
      cor: Cores,
      sexo: Sexo,
      tamanho: Tamanho,
      category: CategoriesValue
    };
    
    
  

    if (!Title || !Description || !Preco || !Images || !CategoriesValue) {
      return alert("Preencha todos os campos primeiros");
    }

    
    axios
      .post(API+"/product/create", variables)
      .then((response) => {
        console.log(response)
        if (response.data.message) {
          alert("Produto criado com successo!");
          setImages([]);
          setTitle("");
          setCategoriesValues('')
          setDescription('')
          setPreco('')
        
        }
      }).catch(err => alert("Erro ao criar produto" + err))
  };

  const destroyImage = (image) => {
      const currentIndex = Images.indexOf(image);

      let newImages = [...Images]
      newImages.splice(currentIndex, 1)

      setImages(newImages)
  }

  const newPostForm = () => (
    <form className="mb-5" onSubmit={handleSubmit}>
      <h4 className="text-muted" id="photo">
        Post Photo
      </h4>
      <div className="adicionar_foto"
       
      >
        <Dropzone  onDrop={dropHandler}>
          {({ getRootProps, getInputProps }) => (
            <div
            
              className="img_arrastar"
              style={{
                width: 300,
                height: 240,
                border: "1px solid lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>+</h1>
                <small>Arraste a imagem até aqui</small>
              </div>
            </div>
          )}
        </Dropzone>

        <div
          style={{
            display: "flex",
            width: "350px",
            height: "240px",
            overflowX: Images ? "scroll" : "hidden",
            overflowY: "hidden",
          }}
        >
          {Images.map((image, index) => (
            <div onDoubleClick={() => destroyImage(image)} key={index}>
              <img
                style={{ minWidth: "300px", width: "300px", height: "250px" }}
                src={`${APIIMAGE}/${image}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label className="text-muted" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          required
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={Title}
          className="form-control"
          placeholder="Product name"
        />
      </div>

      <div className="form-group">
        <label className="text-muted" htmlFor="price">
          Preço
        </label>
        <input
          type="text"
          id="price"
          required
          onChange={(e) => setPreco(e.currentTarget.value)}
          value={Preco}
          className="form-control"
          placeholder="45.00 (não usar virgula)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="text-muted">
          Description
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={Description}
          id="description"
          className="form-control"
          placeholder="Product description"
        />
      </div>

      <div className="form-group">
        <select
          className="form-control"
          type="text"
          onChange={(e) => setCores(e.currentTarget.value)}
          value={Cores}
        >
          {Coris.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <select
          className="form-control"
          type="text"
          onChange={(e) => setSexo(e.target.value)}
          value={Sexo}
        >
          {gener.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <select
          className="form-control"
          onChange={(e) => setCategoriesValues(e.currentTarget.value)}
          value={CategoriesValue}
        >
          <option>
            Selecione uma Categoria
          </option>
          {Categories.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <select
          className="form-control"
          onChange={(e) => setTamanho(e.target.value)}
          value={Tamanho}
        >
          {size.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-outline-primary">
        Criar Produto
      </button>
      <button
        onClick={() => history.push("/dashboard/admin")}
        style={{ marginLeft: "40px" }}
        className="btn btn-outline-danger"
      >
        Voltar
      </button>
    </form>
  );

  return (
    <Layout>
      <div className="row">
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
      </div>
    </Layout>
  );
}

export default CreateProduct;
