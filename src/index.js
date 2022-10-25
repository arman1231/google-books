import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Book from './components/Book';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
      <App />
      </Route>
      <Route path="/books/:id">
        <Book />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
