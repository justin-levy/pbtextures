import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { CgFacebook, CgInstagram } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import Footer from "../Components/Footer";

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
            Find me on Instagram and Facebook, or reach out to me over email!
          </h3>
        </Row>
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="https://instagram.com" aria-label="Instagram" style={{ color: 'inherit' }}>
              <BsInstagram size={'48px'} />
            </a>
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="https://facebook.com" aria-label="Facebook" style={{ color: 'inherit' }}>
              <CgFacebook size={'48px'} />
            </a>
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-center">
            <a href="mailto:example@example.com" aria-label="Email" style={{ color: 'inherit' }}>
              <MdEmail size={'48px'} />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
    <Footer />
  </Container>;
};

export default Contact;