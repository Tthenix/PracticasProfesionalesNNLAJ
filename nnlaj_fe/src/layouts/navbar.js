import { Navbar, Nav, Container, NavLink } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import logo from "../images/logo.png";
import "../layouts/navbar.css";


const NavBarExample = () => {
    return(
       <>      
        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample