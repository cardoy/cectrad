import React from 'react';
import './Areas.Module.css';
import {Col } from 'react-bootstrap';
export default function Home  () {
  return (
    <div className='bodyArea'>
          <div className='corpo'>
            <Col className='col1'>
                <h3 className='h3'>Traduções Técnico-científicas</h3>
                <h5 className='h5'>Temos experiência nas seguintes áreas: </h5>
                <h5 className='h5'>Jurídica, financeira, comercial, acadêmica, administração, 
                    entretenimento, energia, publicidade e marketing, 
                    medicina, tecnologia da informação e comunicação, 
                    comércio exterior, telecomunicações, petróleo e gás, 
                    meio ambiente, engenharia civil, logística, etc.</h5>
            </Col>
            <Col className='col2'>
                <h3 className='h3'>Traduções Juramentadas</h3>
                <h5 className='h5'>Documentos para licitações, concorrências públicas, 
                    contratos, balanços, balancetes e relatórios gerenciais.
                    Processos, cartas rogatórias e procurações.</h5>
                <h5 className='h5'>Certidões de nascimento, casamento e óbito; carteiras 
                    de identidade e de motorista, passaportes, atestados de antecedentes, diplomas e históricos escolares.</h5>
            </Col>
          </div>
    </div>
  )
}
