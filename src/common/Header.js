import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";


export default function Header(){
    return(
        <>
        <Container>
            <Navbar expand="lg">
                <NavbarBrand><img src="img/image.png"></img></NavbarBrand>
                <NavbarToggle></NavbarToggle>
                <Nav className="ms-auto p-3">
                    <NavbarCollapse>
                        <ul className="navbar-nav text-uppercase fw-semibold">
                            <li><NavLink href="#action1">Home</NavLink></li>
                            <li><NavLink href="#action2">Shop</NavLink></li>
                            <li><NavLink href="#action3">Promotional</NavLink></li>
                            <li><NavLink href="#action4">Pages</NavLink></li>
                            <li><NavLink href="#action5">Blog</NavLink></li>
                            <li><NavLink href="#action6">Contact</NavLink></li>
                        </ul>
                    </NavbarCollapse>
                    <ul className="navbar-nav mx-5 mt-1">
                        <li className="mx-2"><a><FaSearch/></a></li>
                        <li className="mx-2"><a><FaUser/></a></li>
                        <li className="mx-2"><a><FaCartPlus/></a></li>
                    </ul>
                </Nav>

            </Navbar>
        </Container>
        </>
    );
}