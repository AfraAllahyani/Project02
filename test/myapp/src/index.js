import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cards from './Components/Cards'
import NotFound from './Components/NotFound'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";

ReactDOM.render(
  <Router>
    
  <Switch>
  <Route exact path='/' component={App} />
  <Route path='/epic-api' component={Cards} />
  <Route component={NotFound} />
  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
