import React from 'react';
import './Home.Module.css';
import { Container, Carousel, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


export default function Home  () {

  const{t} = useTranslation();

  return (
    <div className='bodyHome'>
    <Container className='cont text-center'>
 
      <h3>{t('linha1')}</h3>
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
              <h3>{t('linha9')}</h3>
              <p>{t('linha10')}</p>
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
              <h3>{t('linha11')}</h3>
              <p>{t('linha12')}</p>
              <p>{t('linha13')}</p>
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
              <h3>{t('linha14')}</h3>
              <p>{t('linha15')}</p>
              <p>{t('linha16')}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            <h5 className='parfim text-center'>{t('linha32')}</h5>  
        </div>
    </div>

    </div>
    
  )
}

