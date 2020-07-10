import React, { useState } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { API, APIIMAGE } from "../../variables";

// import { Container } from './styles';

function Search() {
  const [textSearch, setTextSearch] = useState(undefined);
  const [SearchedProducts, setSearchedProducts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [message, setMessage] = useState("");

  const searchFilter = (palavra) => {
    const query = queryString.stringify(palavra);
    console.log("query", query);
    return fetch(`${API}/product/search?${query}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const searchData = () => {
    if (textSearch) {
      searchFilter({ search: textSearch }).then((response) => {
        setSearchedProducts(response);
        setSearched(true);
        console.log("length", response.length);
        setMessage(
          response.length > 0
            ? `Peças encontradas ${response.length}`
            : `Nenhuma peça com este nome foi encontrada`
        );
      });
    }
  };

  const searchedBlogs = (results = []) => {
    return (
      <div className="container bg-white" style={{ padding: "0px important" }}>
        {message && <p className="pt-4 text-muted font-italic">{message}</p>}

        {results.map((blog, i) => {
          return (
            <div key={i} style={{ marginTop: "10px", paddingBottom: 5 }}>
              <a href={`/product/${blog._id}`}>
                <img
                  src={`${APIIMAGE}/${blog.images[0]}`}
                  width="35px"
                  height="35px"
                />
                <a className="text-primary">{blog.title}</a>
              </a>
            </div>
          );
        })}
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchData();
  };

  const searchForm = () => (
    <form
      style={{ display: "flex", flexDirection: "row !important" }}
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        className="form-control"
        onChange={(e) => setTextSearch(e.target.value)}
        placeholder="Procure roupas"
      />
      <label
        onClick={handleSubmit}
        style={{ backgroundColor: "hidden", cursor: "pointer" }}
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </label>
    </form>
  );

  return (
    <>
      <div
        className="container-fluid searchComponent"
      >
        {" "}
        {searchForm()}
      </div>
      {searched && (
        <div
          onCl
          style={{
            position: "absolute",
            border: "1px solid lightblue",
            paddingBottom: "100px !important",
            zIndex: 9999,
            padding: 0,
          }}
        >
          {searchedBlogs(SearchedProducts)}
        </div>
      )}
      {searched && (
        <div
          onClick={() => {
            setSearched(false);
          }}
          style={{
            backgroundColor: "transparent",
            height: "1000px",
            width: "1300px",
            opacity: "0.4",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          ola
        </div>
      )}
    </>
  );
}

export default Search;
