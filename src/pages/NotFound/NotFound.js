
import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

function NotFound() {
  return <main className="not-found">
    <h1 className="not-found h1">404</h1>
    <p className="not-found p">Oups ! La page que vous demandez n'existe pas.</p>
    <Link to="/home" className="not-found return-home">Retourner sur la page d'accueil</Link>
  </main>
}

export default NotFound;
