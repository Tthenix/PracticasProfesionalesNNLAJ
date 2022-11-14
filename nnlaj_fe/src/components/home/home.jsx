import React from "react";
import "./home.css";
import { Bar } from 'react-chartjs-2/dist';
import { options } from "./dashboard/barchart.tsx";
import { data } from "./dashboard/barchart.tsx";
import { Nav, NavLink,table } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png";

import camote from "../../images/Camote.jpg";
import aji from "../../images/Aji.jpg";
import fondo from "../../images/image.jpg";
import dragon from "../../images/Fruta del dragon.jpg";
import frutilla from "../../images/Frutilla.jpg";
import romanesco from "../../images/Romanesco.jpg";
import zapallo from "../../images/Zapallo.jpg";

function Home() { 
   return (
    <div className="Home" align="center">

<nav className="navbar">
    <div className="container ">
      <NavLink as={Link} to="/home"><img src={logo} class="logo" width="80" href="Home"></img></NavLink>
    <Nav.Link as={Link} to="/nosotros" className="texto">Nosotros</Nav.Link>  
      <div class="TextoIMg">
        ElHuerto
      </div>
    <div className="TextoIMg2">
        Invernadero de la ETEC  
    </div>
  </div>
</nav>

<div className="container text-center">    
  <div className="row">
      <div className="col-6"><div className="col-lg-6">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={frutilla} alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={frutilla} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={frutilla} alt="Third slide"/>
        </div>
      </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  </div>
</div>

<div className="col-6">
  <Bar  options={options} data={data} />;
</div>
</div>
<div class="container text-center">
  <div class="row row-cols-3">
    <div class="col">
      <div className="texto">
        Camote
      </div>
        <img className="img-fluid" src={camote} alt="Camote" width="65%" height="50%"/>
      </div>

      <div class="col">
        <div className="texto">
          Frutilla
        </div>
          <img className="img-fluid" src={frutilla} alt="frutilla" width="65%" height="50%"/>
      </div>

      <div class="col">
        <div className="texto">
          Dragon
        </div>
          <img className="img-fluid" src={dragon} alt="dragon" width="65%" height="50%"/>
      </div>

      <div class="col">
        <div className="texto">
          Aji
        </div>
        <img className="img-fluid" src={aji} alt="dragon" width="65%" height="50%"/>
      </div>

      <div class="col">
        <div className="texto">
          Camote
        </div>
      </div>

      <div class="col">
        <div className="texto">
          Camote
        </div>
      </div>
         
    </div>
  </div>
</div>

</div>
  );
}
export default Home;
