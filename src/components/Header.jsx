import React from "react";
import imgBanner from "../img/fond.png";
import logo from "../img/logo.png";


const HeaderBanner = () => {
  return (
    <header className="banner" id="headerBanner">
        <div className="banner-title">
            <img className="banner-title__logo" src={logo} alt="logo sushi pirate" />
        </div>
        <div className="banner-welcome">
          <img className="banner-welcome__img" src={imgBanner} alt="Fond pour présentation du restaurant" />
            <h2 className="banner-welcome__h2">Soyez prêts à déguster nos meilleurs sushis et denrées asiatiques. A vos marques, prêt, à l'abordage !</h2>
        </div>
    </header>
  );
};

export default HeaderBanner;