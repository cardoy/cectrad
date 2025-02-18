import React from 'react';
import './Areas.Module.css';
import {Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Home  () {

  const{t} = useTranslation();
  
  return (
    <div className='bodyArea'>
          <div className='corpoArea'>
            <Col className='col1'>
                <h3 className='h3'>{t('linha18')}</h3>
                <h5 className='h5'>{t('linha19')} </h5>
                <h5 className='h5'>{t('linha20')}</h5>
            </Col>
            <Col className='col2'>
                <h3 className='h3'>{t('linha21')}</h3>
                <h5 className='h5'>{t('linha22')}</h5>
                <h5 className='h5'>{t('linha23')}</h5>
                <h5 className='h5'>{t('linha24')}</h5>
            </Col>
          </div>
    </div>
  )
}
