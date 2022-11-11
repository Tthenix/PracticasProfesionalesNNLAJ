import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import logo from "../images/images.png";
import "../layouts/navbar.css";


const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <a className="img" href="Home">
       <img href="Home" class= "logo" src={logo} alt="Camote" width="75" height="100%" />
       </a>
        <Container>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>       
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample