import React from "react";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import './error.css';
import Footer from "../../components/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <h1 className="error" >404</h1>
      <p className="oups" >Oups! La page que vous demandez n'existe pas.</p>
      <Link className="link" to="/">retour vers la page d'accueil</Link>
      <Footer />
    </div>
  );
};

export default Error;