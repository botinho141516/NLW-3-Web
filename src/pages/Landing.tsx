import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/pages/landing.css';
import { Link } from 'react-router-dom';

import LogoImg from '../images/Logo.svg';

const Landing = () => {
  return (
    <div id="landing-page">
      <div className="content-wrapper">
        <img src={LogoImg} alt="logo-img" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          <div className="location">
            <strong> Louveira </strong>
            <span> São Paulo </span>
          </div>
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Landing;