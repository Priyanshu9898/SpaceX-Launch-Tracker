import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-white bg-dark">
      <Container>
        <Row>
          <Col className="text-center">
            <span>©2023 - Developed By Priyanshu Malaviya</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
