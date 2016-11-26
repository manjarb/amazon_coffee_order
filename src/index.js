import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Homepage from './components/Homepage';
import ProductList from './components/ProductList';
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
      </Route>
    </Router>
);


render(router, document.getElementById('root'));
