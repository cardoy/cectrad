import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Trabalhos.Module.css';


export default function Trabalhos  () {
  const livros = [
    { id: 1, titulo: "Livro 1", imagem: "/item1.jpg", pdf: "/naval.pdf" },
    { id: 2, titulo: "Livro 2", imagem: "/item2.jpg", pdf: "/chagas.pdf" },
    { id: 3, titulo: "Livro 3", imagem: "/item3.jpg", pdf: "/santosesp.pdf" },
    { id: 4, titulo: "Livro 4", imagem: "/item4.jpg", pdf: "/santosing.pdf" },
    { id: 5, titulo: "Livro 5", imagem: "/item5.jpg", pdf: "/Folder-CHN.pdf" },
    { id: 6, titulo: "Livro 6", imagem: "/item7.jpg", pdf: "/nec.pdf" }
    
  ];
  const abrirPdf = (pdfPath) => {
      window.open(pdfPath, "_blank"); // Abre o PDF em uma nova aba
    };
  
  return (
    <div className='corpoTrab text-center' >
      <h6>Seguem exemplos de trabalhos já realizados.</h6>
      <h6>Clique na capa para ver a tradução na íntegra.</h6>
        <Container className="livros-container text-center mt-4">
      <Row className="justify-content-center">
        {livros.map((livro) => (
          <Col key={livro.id} xs={6} sm={4} md={4} lg={4} xl={4} className="mb-3">
            <img
              src={livro.imagem}
              alt={livro.titulo}
              className="img-fluid capa-livro"
              onClick={() => abrirPdf(livro.pdf)}
              style={{ cursor: "pointer", borderRadius: "10px" }}
            />
          </Col>
        ))}
      </Row>
    </Container>  
  </div>
  )
}
