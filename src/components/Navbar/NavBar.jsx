import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavBar.Module.css';

export default function NavbarComponent({ handleLanguageChange }) {
  const [expanded, setExpanded] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log('Idioma atual:', i18n.language);
  }, [i18n.language]);

  return (
    <Navbar className="navbar-custom" expand="lg" expanded={expanded} fixed="top">
      <Container>
        <Image src="logo1.png" alt="Logo" width={40} height={40} className="me-2" />
        <Navbar.Brand className="titulo" as={Link} to="/">
          CeCTrad <span>Traduções</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="item" as={Link} to="/" onClick={() => setExpanded(false)}>
              {t('linha2')}
            </Nav.Link>
            <Nav.Link className="item" as={Link} to="/Areas" onClick={() => setExpanded(false)}>
              {t('linha3')}
            </Nav.Link>
            <Nav.Link className="item" as={Link} to="/Trabalhos" onClick={() => setExpanded(false)}>
              {t('linha4')}
            </Nav.Link>
            <Nav.Link className="item" as={Link} to="/Clientes" onClick={() => setExpanded(false)}>
              {t('linha5')}
            </Nav.Link>
            <Nav.Link className="item" as={Link} to="/Contato" onClick={() => setExpanded(false)}>
              {t('linha6')}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Renderização condicional dos links de idioma */}
        <Nav className="ml-auto">
          {i18n.language === 'pt' && (
            <Nav.Link 
              className="espanhol" 
              onClick={() => handleLanguageChange('es')}
            >
              Espanhol
            </Nav.Link>
          )}
          {i18n.language === 'es' && (
            <Nav.Link 
              className="portugues" 
              onClick={() => handleLanguageChange('pt')}
            >
              Português
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
