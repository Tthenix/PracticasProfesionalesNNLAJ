import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./nosotros.css"
import { Nav, NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png";
import Nahuel from "../../images/Nahuel.jpeg"
import Ariel from "../../images/Ariel.jpeg"
import Nico from "../../images/Nicov2.jpeg"
import Lucas from "../../images/Lucas.jpeg"
import Juan from "../../images/Juan.png"
function nosotros() {
    return (
    
    <div className="fondo">
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
          <div className="col">
            <img className="Imgperfil" src={Nahuel} width="150vw"/>
          
            <div className="text">Nahuel Quiroga</div> 
            <div className="text2">Lider, Front end y Diseño</div> 
          </div>
          <div className="col">
         <img className="Imgperfil" src={Ariel} width="150vw" height="152vh"/>
          
            <div className="text">Ariel Cohen</div> 
            <div className="text2">Front end, Diseño y ayudante general</div> 
          </div>
        </div>
        <div className="row">
          <div className="col">
          <img className="Imgperfil" src={Nico} width="150vw" />
            <div className="text">Nicolas Beltran</div> 
            <div className="text2">Front end, Diseño y ayudante general</div> 
          </div>
          <div className="col">
          <img className="Imgperfil" src={Lucas} width="150vw" height="152vh"/>
            <div className="text">Lucas Moran</div> 
            <div className="text2">Back end</div> 
          </div>
          <div className="col">
          <img className="Imgperfil" src={Juan} width="150vw" height="152vh" />
            <div className="text">Juan Yañez</div> 
            <div className="text2">Busqueda de informacion, diseño</div> 
          </div>
          <div className="text3">
          Esta es una pagina la cual vas a poder encontrar mucha informacion, cuidados y mas hacerca de plantas, nuestro objetivo es llegar a poner muchos tipos de plantas, para que cualquiera que lo necesite pueda obtener informacion de lo que necesite.
          </div>
        </div>
      </div>
    </div>
    );
}
export default nosotros;