import React from 'react';
import './App.css';
import Home from './pages/Home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ProductId from './pages/ProductId'
import Footer from './components/Footer';
import Admin from './pages/Admin'
import Signup from './pages/Signup'
import signin from './pages/Signin'
import CreateProduct from './pages/Admin/CreateProduct'
import ManageProducts from './pages/Admin/ManageProducts'
import ManageCategories from './pages/Admin/ManageCategories'
import Roupas from './pages/Roupas';
import AdminRoute from './components/Auth/AdminRoute';
import PrivateRoute from './components/Auth/PrivateRoute';
import User from './pages/User';
import CreateCategory from './pages/Admin/CreateCategory'
import EditCategory from './pages/Admin/EditCategory'
import CategoryRoupa from './pages/CategoryRoupa';
import categoriaOne from './pages/CategoriaOne';
import FavoritesPage from './pages/FavoritePage'
import SalaoBeleza from './pages/SalaoBeleza'
function App() {
  return (
    <>
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/product/:id" component={ProductId} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/signin" component={signin} />
    <Route exact path="/roupas" component={Roupas} />
    <Route exact path="/CategoryRoupa" component={CategoryRoupa} />
    <Route exact path="/categoria/:name" component={categoriaOne} />
    <Route exact path="/salao-de-beleza" component={SalaoBeleza} />
    
    

    <PrivateRoute exact path="/dashboard/user" component={User} />
    <PrivateRoute exact path="/dashboard/favorites" component={FavoritesPage} />
    {/* //admin page// */}
    <AdminRoute exact path="/dashboard/admin" component={Admin} />
    <AdminRoute exact path="/admin/createproduct" component={CreateProduct} />
    <AdminRoute exact path="/admin/createCategory" component={CreateCategory} />
    <AdminRoute exact path="/admin/EditCategory/:categoryId" component={EditCategory} />
    <AdminRoute exact path="/admin/products" component={ManageProducts} />
    <AdminRoute exact path="/admin/categories" component={ManageCategories} />
  </Switch>
  </BrowserRouter>
  <Footer/>

    </>
  );
}

export default App;
