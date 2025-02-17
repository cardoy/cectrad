import React from 'react';
import './Home.Module.css';
import { Container, Carousel, Image } from 'react-bootstrap';
export default function Home  () {
  return (
    <div className='bodyHome'>
    <Container className='cont text-center'>
      <h3>Traduções Literárias, Técnicas e Juramentadas. Telefone/WhatsApp: (21) 99171-7885</h3>
    </Container>
    <div className="carousel-container">
    <div className="mt-4" >
        <Carousel>
          <Carousel.Item>
          <Image
               className="d-block w-100" 
               src="/slide4.jpg" 
               alt="Imagem"
               style={{ opacity: 0.3 }} // Ajuste o valor entre 0 (totalmente transparente) e 1 (opaco)
               fluid 
          />
            <Carousel.Caption>
              <h3>Nosso objetivo</h3>
              <p>Prestar serviços de tradução e versão de textos e documentos nos idiomas português e espanhol.</p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <Image
               className="d-block w-100" 
               src="/traduccion-tecnica.jpg" 
               alt="Imagem"
               style={{ opacity: 0.3 }} // Ajuste o valor entre 0 (totalmente transparente) e 1 (opaco)
               fluid 
          />
            <Carousel.Caption>
              <h3>Tradução Técnica</h3>
              <p>Modalidade tradutória de textos técnicos e científicos com terminologias especializadas.</p>
              <p>Contamos com colaboradores com vasto conhecimento em áreas específicas.</p>
            </Carousel.Caption>
          </Carousel.Item>
  
          <Carousel.Item>
          <Image
               className="d-block w-100" 
               src="/slide5.jpg" 
               alt="Imagem"
               style={{ opacity: 0.3 }} // Ajuste o valor entre 0 (totalmente transparente) e 1 (opaco)
               fluid 
          />
            <Carousel.Caption>
              <h3>Tradução Juramentada</h3>
              <p>Tradução portadora de fé pública para todos os efeitos legais.</p>
              <p>É reconhecida por instituições e órgãos públicos e realizada por tradutor juramentado.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            <h5 className='parfim text-center'>Conetando o mundo há mais de 30 anos.</h5>  
        </div>
    </div>

    </div>
    
  )
}

