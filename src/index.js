import React from 'react';
import App from './components/App';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
import SuccessOrder from './components/SuccessOrder';
import OrderDetails from './components/OrderDetails';
import CustomizeOrder from './components/CustomizeOrder';
import YourOrders from './components/YourOrders';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';
import './css/style.css';

//const repo = `/`

const router = (
    <Router history={ browserHistory } basename="/amazon_coffee_build/">
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
        <Route path="/shops/:id" component={ProductList}/>
        <Route path="/shops/:shop_id/product/:order_id" component={OrderDetails}/>
        <Route path="/shops/:shop_id/product/:order_id/customize" component={CustomizeOrder}/>
        <Route path="/order/:id/success" component={SuccessOrder}/>
        <Route path="/user/orders" component={YourOrders}/>
      </Route>
    </Router>
);


render(router, document.getElementById('root'));
