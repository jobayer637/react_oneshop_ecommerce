import React, { useEffect, useContext } from 'react';
import { rootContext } from './api/context/ContextProvider';
import ShopRoute from './component/route/ShopRoute';
import axios from 'axios'

import Login from './component/auth/Login'
import Register from './component/auth/Register';
import ForgotPassword from './component/auth/ForgotPassword'
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const { api_categories, api_products } = useContext(rootContext)
  const [categories, setCategories] = api_categories
  const [products, setProducts] = api_products

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        const categories = category(res.data)
        setCategories(categories)
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [setCategories, setProducts])

  const category = (products = []) => {
    let categories = []
    products.map(product => {
      categories.push(product.category)
    })
    let unique = [...new Set(categories)];

    return unique
  }


  return (
    <div>

      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-passward" component={ForgotPassword} />
          <Route path="/" render={props => <ShopRoute {...props} />} />
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
