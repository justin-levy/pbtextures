import { Col, Container, Row } from "react-bootstrap";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaEtsy } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return <Container style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    <Row>
      <Col sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="artist2.jpg" style={{
          height: '100vh',
          objectFit: 'cover',
          width: '100%'
        }} alt="Artist" />
      </Col>
      <Col sm={6} style={{
        display: 'flex', flexDirection: 'column',
        height: '100vh', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        padding: '10%',
      }}>
        <Row>
          <h3 style={{ marginBottom: '20px' }}>
            Find me on Instagram and Tiktok, check out my Etsy Storefront, or reach out to me over email!
          </h3>
        </Row>
        <Row style={{ width: '100%', justifyContent: 'space-around' }}>
          <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="https://instagram.com/pbtextures" aria-label="Instagram" style={{ color: 'inherit' }}>
              <BsInstagram size={'48px'} />
            </a>
          </Col>
          {/* <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="https://facebook.com" aria-label="Facebook" style={{ color: 'inherit' }}>
              <CgFacebook size={'48px'} />
            </a>
          </Col> */}
          <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="https://www.tiktok.com/@pbtextures" aria-label="Tiktok" style={{ color: 'inherit' }}>
              <BsTiktok size={'48px'} />
            </a>
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="https://www.etsy.com/shop/PBStudiotextures" aria-label="Etsy" style={{ color: 'inherit' }}>
              <FaEtsy size={'48px'} />
            </a>
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="mailto:pball723@yahoo.com" aria-label="Email" style={{ color: 'inherit' }}>
              <MdEmail size={'48px'} />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>;
};

export default Contact;