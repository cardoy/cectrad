import React from 'react';
import './Clientes.Module.css';
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
export default function Clientes  () {
  return (
    <div className='bodyClientes'>
         <div className='container-lista'>
         <Row>
         <Col>
         <ListGroup as="ul" className='lista text-center'>
            <ListGroupItem as="li" className='item'>Ministério das Relações Exteriores</ListGroupItem>
            <ListGroupItem as="li" className='item'>Ministerio da Ciência e Tecnologia</ListGroupItem>
            <ListGroupItem as="li" className='item'>Tribunal Superior Eleitoral - TSE</ListGroupItem>
            <ListGroupItem as="li" className='item'>Comissão de Valores Mobiliários</ListGroupItem>
            <ListGroupItem as="li" className='item'>Construtora Norberto Odebrecht Ltda.</ListGroupItem>
            <ListGroupItem as="li" className='item'>Construtora Queiroz Galvão S.A.</ListGroupItem>
            <ListGroupItem as="li" className='item'>Shell Brasil</ListGroupItem>
            <ListGroupItem as="li" className='item'>SciDev.net</ListGroupItem>
            <ListGroupItem as="li" className='item'>Rede Hospitalar CHN</ListGroupItem>
            <ListGroupItem as="li" className='item'>Packaging Comunicação Ltda.</ListGroupItem>
            <ListGroupItem as="li" className='item'>Armazens Gerais Murundu Ltda.</ListGroupItem>
            <ListGroupItem as="li" className='item'>Marketing Vision Consultoria e Eventos Ltda.</ListGroupItem>
            <ListGroupItem as="li" className='item'>Fraternidade Federação Humanitária Internacional.</ListGroupItem>
            <ListGroupItem as="li" className='item'>Lar Franciscano.</ListGroupItem>
            
        </ListGroup>
        </Col>
        </Row>
        </div>
    </div>
  )
}