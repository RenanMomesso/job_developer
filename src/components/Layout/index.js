import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../../helpers/storage";
import { useHistory } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { API, APIIMAGE } from "../../variables";
import queryString from "query-string";
import NewsLetter from "../NewsLetter";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  Nav,
  NavItem,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";
import Footer from "../Footer";

function Layout({ children }) {
  const history = useHistory();
  const [Categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const CategoriesGet = () => {
    axios
      .get(`${API}/categories`)
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    CategoriesGet();
  }, []);
  const [textSearch, setTextSearch] = useState(undefined);
  const [SearchedProducts, setSearchedProducts] = useState([]);
  const [searched, setSearched] = useState(false);
  const [message, setMessage] = useState("");

  const searchFilter = (palavra) => {
    const query = queryString.stringify(palavra);
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

  const newMenu = () => (
    <div>
      <Navbar color="none" light expand="md">
        <NavbarBrand href="/">JULIANA STORE & STUDIO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>

          <Nav className="" navbar>
            <NavItem className="searchingbar">
              {searchForm()}
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
            </NavItem>
            
            

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ border: "1px solid gray" }}>
                ROUPAS | CATEGORIAS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href={`/roupas`}>Roupas</a>
                </DropdownItem>
                {Categories.map((i, k) => (
                  <DropdownItem key={k}>
                    <a href={`/categoria/${i.name}`}>{i.name}</a>
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>Fechar</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/salao-de-beleza">
                  Salão de Beleza
              </NavLink>
            </NavItem>
            <NavItem
              title="Contat Page"
              className="menu_hover"
              style={{ marginRight: 10 }}
            >
              <NavLink href="/dashboard/favorites">
                {isAuth() && 
                    "Favoritos"
              }
              </NavLink>
            </NavItem>
            {!isAuth() && (
              <>
                <NavItem>
                  <NavLink href="/signup">
                      CADASTRAR
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/signin" className="menu_hover">
                    ENTRAR
                  </NavLink>
                </NavItem>
              </>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem title="Your dashboard" className="menu_hover">
                <NavLink href="/dashboard/admin">
                    <i
                      className="fa fa-user"
                      aria-hidden="true"
                      title="Your dashboard"
                      style={{ marginLeft: 10, marginRight: 10 }}
                    ></i>
                </NavLink>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem title="Your dashboard" className="menu_hover">
                <NavLink href="/dashboard/user">
                      <i
                        className="fa fa-user"
                        aria-hidden="true"
                        style={{ marginLeft: 10, marginRight: 10 }}
                        title="Your DASHBOARD"
                      />
                </NavLink>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  className="menu_hover"
                  title="signout"
                  onClick={() => signout(() => history.push("/"))}
                >
                  <i
                    className="fa fa-sign-out"
                    aria-hidden="true"
                    title="signout"
                    style={{ marginLeft: 10, marginRight: 10 }}
                  ></i>
                </NavLink>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                href="https://www.instagram.com/juliana_vechini_fernandes/"
                target="blank"
                  className="btn btn-danger menu_hover"
                  title="Write a new post"
                >
                    <i
                      className="fa fa-instagram icone-redes"
                      style={{ color: "black" }}
                      aria-hidden="true"
                    ></i>
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "blue !important" }}
      >
        <div style={{ marginBottom: 10, marginTop: 10 }}>{newMenu()}</div>
      </div>
      <div className="container-fluid">{children}</div>
    </>
  );
}

export default Layout;
