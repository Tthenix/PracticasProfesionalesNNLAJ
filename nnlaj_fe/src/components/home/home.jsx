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
      <div className="card">
          <div className="card-body">
              <h4 className="card-title texto">Informacion invernadero</h4>
              <div className="d-flex align-items-center flex-row m-t-30">
                  <div className="display-5 text-info">
                      <span>15<sup>°</sup></span></div>
              </div>
              <table className="table no-border mini-table m-t-20">
                  <tbody>
                      <tr>
                          <td className="text-muted">Humedad del suelo</td>
                          <td className="font-medium">71%</td>
                      </tr>
                      <tr>
                          <td className="text-muted">Humedad relativa</td>
                          <td className="font-medium">83%</td>
                      </tr>
                      <tr>
                          <td className="text-muted">Presión</td>
                          <td className="font-medium">28.56 in</td>
                      </tr>
                  </tbody>
              </table>
              <ul className="row list-style-none text-center m-t-30">
                  <div className="col-3">
                      <h4 className="text-info"></h4>
                      <span className="d-block text-muted">09:30</span>
                      <h3 className="m-t-5">9<sup>°</sup></h3>
                  </div>
                  <div className="col-3">
                      <h4 className="text-info"></h4>
                      <span className="d-block text-muted">11:30</span>
                      <h3 className="m-t-5">12<sup>°</sup></h3>
                  </div>
                  <div className="col-3">
                      <h4 className="text-info"></h4>
                      <span className="d-block text-muted">13:30</span>
                      <h3 className="m-t-5">15<sup>°</sup></h3>
                  </div>
                  <div className="col-3">
                      <h4 className="text-info"></h4>
                      <span className="d-block text-muted">15:30</span>
                      <h3 className="m-t-5">19<sup>°</sup></h3>
                  </div>
              </ul>
          </div>
      </div>
  </div>
</div>
<div className="col-6">
  <Bar options={options} data={data} />;
</div>
    </div>
    <div className="row">
        <div className="col"><div className="planta" align="center">

      <table border="0" class="table">
        <tr>
          <td className="texto" align="center">Camote</td>
          <td className="texto" align="center">Aji</td>
        </tr>
        <tr>
          <td>
            <a href="Camote">
              <img className="img-fluid" src={camote} alt="Camote" width="65%" height="50%" />
            </a>
          </td>
          <td>
            <a href="Aji">
              <img className="img-fluid" src={aji} alt="Aji" width="65%" height="50%" />
            </a>
          </td>      
        </tr>
        <tr>
          <td className="texto" align="center">Dragon</td>
          <td className="texto" align="center">Frutilla</td>
        </tr>
        <tr>
          <td>
            <a href="Dragon">
              <img className="img-fluid" src={dragon} alt="Dragon" width="65%" height="50%" />
            </a>
          </td>
          <td>
          <a href="Frutilla">
              <img className="img-fluid" src={frutilla} alt="Frutilla" width="65%" height="50%" />
            </a>
          </td>
        </tr>
      </table>
      </div>
</div>
</div>
</div>

</div>
  );
}
export default Home;
