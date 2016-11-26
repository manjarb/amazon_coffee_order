import React from 'react';
import App from './components/App';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
import SuccessOrder from './components/SuccessOrder';
import OrderDetails from './components/OrderDetails';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';
import './css/style.css';

const router = (
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
        <Route path="/shops/:id" component={ProductList}/>
        <Route path="/shops/:shop_id/product/:order_id" component={OrderDetails}/>
        <Route path="/order/:id/success" component={SuccessOrder}/>
      </Route>
    </Router>
);


render(router, document.getElementById('root'));
