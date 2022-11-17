import React from "react";
import "./home.css";
import { Bar } from 'react-chartjs-2/dist';
import { options } from "./dashboard/barchart.tsx";
import { data } from "./dashboard/barchart.tsx";
import { Nav, NavLink,table,button } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import logo from "../../images/logo.png";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
<Container>
      <Row>
        <Col xs={{ order: 'last' }}><Carousel style={{ width: '19rem', height: '15rem', color:"white"}}>
      <Carousel.Item >
          <Card style={{width: '18rem', background:"transparent"}}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
              Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '20rem',background:"transparent" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '18rem',background:"transparent" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
      </Carousel.Item>
    </Carousel></Col>
        <Col xs={{ order: 'first' }}>  
          <div className="col-10  ">
            <Bar  options={options} data={data} />;
          </div>
        </Col>
      </Row>
    </Container>

  <div class="container text-center">
    <div class="row row-cols-3">
      <div class="col">
        <div className="texto">
          Camote
        </div>
        <Link to="/camote"><img className="img-fluid" src={camote} alt="Camote" width="65%" height="50%"/></Link>
        </div>

        <div class="col">
          <div className="texto">
            Frutilla
          </div>
          <Link to="/frutilla"><img className="img-fluid" src={frutilla} alt="frutilla" width="65%" height="50%"/></Link>
        </div>

        <div class="col">
          <div className="texto">
            Dragon
          </div>
          <Link to="/dragon"><img className="img-fluid" src={dragon} alt="dragon" width="65%" height="50%"/></Link>
        </div>

        <div class="col">
          <div className="texto">
            Aji
          </div>
          <Link to="/aji"><img className="img-fluid" src={aji} alt="aji" width="65%" height="50%"/></Link>
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
  );
}
export default Home;
