import { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.Module.css";

export default function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      className="navbar-custom" 
      expand="lg" 
      expanded={expanded} 
      fixed="top"
    >
      <Container>
      <Image 
          src="logo1.png" 
          alt="Logo" 
          width={40} 
          height={40} 
          className="me-2"
        />

        <Navbar.Brand className="titulo" as={Link} to="/">CecTrad - Traduções</Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="item" as={Link} to="/" onClick={() => setExpanded(false)}>Início</Nav.Link>
            <Nav.Link className="item" as={Link} to="/Areas" onClick={() => setExpanded(false)}>Áreas de Especialização</Nav.Link>
            <Nav.Link className="item" as={Link} to="/Clientes" onClick={() => setExpanded(false)}>Clientes</Nav.Link>
            <Nav.Link className="item" as={Link} to="/Trabalhos" onClick={() => setExpanded(false)}>Trabalhos</Nav.Link>
            <Nav.Link className="item" as={Link} to="/Contato" onClick={() => setExpanded(false)}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
