import React, {useState} from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // i18n configurado corretamente
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import Areas from './components/Areas/Areas';
import Trabalhos from './components/Trabalhos/Trabalhos';
import Clientes from './components/Clientes/Clientes';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import "./App.Module.css";

export default function App() {
  const[language,setLanguage] = useState('es');
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language).then(() => {
      setLanguage(language);
      console.log('O idioma mudou para ' + language);
    }).catch(err => console.error('Erro ao mudar idioma:', err));
  };
  return (
    <I18nextProvider i18n={i18n}>
      <div className="fundo">
        <Router>
          <div className="layout-container">
            <NavbarComponent handleLanguageChange={handleLanguageChange} />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Inicio" element={<Home />} />
                <Route path="/Areas" element={<Areas />} />
                <Route path="/Trabalhos" element={<Trabalhos />} />
                <Route path="/Clientes" element={<Clientes />} />
                <Route path="/Contato" element={<Contato />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    </I18nextProvider>
  );
}
