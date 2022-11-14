import React from 'react'
import "./plantas.css";
import romanesco from "../../images/Romanesco.jpg";
import fondo from "../../images/image.jpg";
import { Nav, NavLink } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png";
// git merge


function Romanesco() {
  return (
    <div className='main' >
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
      <img src={fondo} alt="Fondo" width="100%" height="100%" />
      <div className='informacion'>
        <div >
          <div className="planta1">
            romanesco
          </div>
          <div className="titulo">
            Descripcion
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae.
          </div>
          <div className="titulo">
            Cultivo
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae.
          </div>
          <div className="titulo">
            Cuidados
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae.
          </div>
          <div className="titulo">
            Recomendaciones
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae.
          </div>
          <div className="titulo">
            Reproduccion
          </div>
          <div className="texto">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit interdum elementum dui laoreet purus torquent, ullamcorper nostra at morbi himenaeos. Vestibulum proin ornare nibh cursus porttitor volutpat ad, fames aenean dictumst praesent facilisis per placerat curae.
          </div>
        </div>
      </div>
      <div className='imagenplanta'>
        <div align="center">
          <img src={romanesco} alt="Aji" width="80%" height="20%" />
        </div>
      </div>

    </div>
  )
}
export default Romanesco