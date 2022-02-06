import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { GoLinkExternal } from 'react-icons/go';

const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Row>
        <Col className='footer-group'>
          <div className='footer-title-left'>u-Weather - A Simple Weather App</div>
          <div className='footer-item-left'>Made By Ryan Towner</div>
          <div className='footer-item-left'>Using React, React-Bootstrap, WeatherApi.com, and Rainviewer.com</div>
        </Col>
        <Col></Col>
        <Col className='footer-group'>
          <div className='footer-title-right'>Links:</div>
          <div className='footer-item-right'><a href='http://github.com' target="_blank" rel="noreferrer" className='footer-link'>Soruce On Github <GoLinkExternal className='footer-icon'/> </a></div>
          <div className='footer-item-right'><a href='http://weatherapi.com' target="_blank" rel="noreferrer" className='footer-link'>WeatherApi <GoLinkExternal className='footer-icon'/> </a></div>
          <div className='footer-item-right'><a href='http://rainviewer.com' target="_blank" rel="noreferrer" className='footer-link'>Rainviewer <GoLinkExternal className='footer-icon'/> </a></div>
        </Col>
      </Row>
    </Container>
  )
};

export default Footer;
