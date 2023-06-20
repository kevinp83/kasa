import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from '../src/pages/Home/index';
import Logement from '../src/pages/Logement';
import About from '../src/pages/About/index';
import Error from '../src/pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  min-width: 600px;
  max-width: 1450px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 100px;
  padding-right: 100px;
  font-family: 'Montserrat', sans-serif;
}

ul {
  padding-inline-start: 0;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();