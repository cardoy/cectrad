import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import './Contato.Module.css';
import { useTranslation } from 'react-i18next';

export default function Contato() {
    const{t} = useTranslation();
  
  const [captchaValido, setCaptchaValido] = useState(false);
  const [mensagemStatus, setMensagemStatus] = useState("");
  const formRef = useRef();

  const handleCaptchaChange = (value) => {
    setCaptchaValido(!!value); // Se houver um valor, o captcha está válido
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir envio padrão do formulário

    if (!captchaValido) {
      alert("Por favor, verifique o CAPTCHA antes de enviar.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_n1zeuqb", // Substitua pelo seu Service ID
        "template_db70rg3", // Substitua pelo seu Template ID
        formRef.current,
        "DsNpKd3DuSv3JvWFF" // Substitua pela sua Public Key
      );
      setMensagemStatus("E-mail enviado com sucesso! ✔️");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setMensagemStatus("Erro ao enviar e-mail. ❌");
    };
  };

  return (
    <div className="corpoCon">
      <Container fluid className="px-3">
        <Row className="justify-content-center my-4">
        <Col xs={12} sm={8} md={8} lg={8} className="text-center">
        <hr />
            <Form ref={formRef} onSubmit={handleSubmit} >
              <Row className="justify-content-center">
              <Col sm={8} md={8} lg={8}>
              <Form.Group className="d-flex align-items-center mb-3">
                    <Form.Label className="label" style={{ width: "120px" }}>
                    {t('linha27')}
                    </Form.Label>
                    <Form.Control
                      className="texto"
                      type="text"
                      name="nome" // Correspondente à variável do template
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} >
                <Form.Group className="d-flex align-items-center mb-3">
                    <Form.Label className="label" style={{ width: "120px" }}>
                    {t('linha28')}
                    </Form.Label>
                    <Form.Control
                      className="texto"
                      type="email"
                      name="email" // Correspondente à variável do template
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} >
                <Form.Group className="d-flex align-items-center mb-3">
                    <Form.Label className="label" style={{ width: "120px" }}>
                    {t('linha29')}
                    </Form.Label>
                    <Form.Control
                      className="texto"
                      type="tel"
                      name="telefone" // Correspondente à variável do template
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} className="text-center">
                <Form.Group className="d-flex align-items-center mb-3">
                    <Form.Label className="label" style={{ width: "120px" }}>
                    {t('linha30')}
                    </Form.Label>
                    <Form.Control
                      className="texto"
                      as="textarea"
                      name="mensagem" // Correspondente à variável do template
                      rows={3}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <hr></hr>
              <Row className="d-flex justify-content-center">
                 <Col xs={12} sm={8} md={8} lg={8} className="d-flex flex-column align-items-center text-center">
                    <div className="recaptcha-wrapper">
                      <div className="recaptcha-container">
                         <ReCAPTCHA sitekey="6LdbLNkqAAAAAHBw_R5y9xL0fqWqtbTyagAV17L7" onChange={handleCaptchaChange} />
                      </div>
                    </div>

                  <Button type="submit" variant="success" className="botao mt-2">
                  {t('linha31')}
                  </Button>
               </Col>
              </Row>
           </Form>
            {mensagemStatus && (
              <p className="mt-1">{mensagemStatus}</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
