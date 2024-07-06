import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageHoverComponent from "../Components/ImageHoverComponent";
import { COLORS } from "../colors";

const Home = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return <Container>
    <Row>
      <Col sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="artist.jpg" style={{
          height: '100vh',
          objectFit: 'cover',
          width: '100%'
        }} alt="Artist" />
      </Col>
      <Col sm={6} style={{
        display: 'flex', flexDirection: 'column',
        height: '100vh', justifyContent: 'center', alignItems: 'center',
        padding: '10%',
        textAlign: 'center',
        backgroundColor: COLORS.beige
      }}>
        <h2 style={{ fontWeight: 'bolder' }}>
          Check out all of my collections below, along with my latest collection: Jesmonite!
        </h2>
        {/* <h3>
          This is a test
        </h3> */}
      </Col>
    </Row>
    <button className="down-arrow" onClick={scrollToContent}>
      ↓
    </button>
    <div id="content-section" style={{ padding: '100px 20px 64px 20px', textAlign: 'center' }}>
      <h2 className="mobile-hidden">Check out my collections!</h2>
      {/* <p>Here is the content below the initial section.</p> */}
    </div>
    <Row>
      <ImageHoverComponent img={'collections/althea/althea1.jpg'} title='althea' />
      <ImageHoverComponent img={'collections/jesmonite/jesmonite1.jpg'} title='jesmonite' />
    </Row>
    <Row>
      <ImageHoverComponent img={'collections/sculptures/sculptures1.jpg'} title='sculptures' />
      <ImageHoverComponent img={'collections/artemis/artemis1.jpg'} title='artemis' />
    </Row>
    <Row>
      <ImageHoverComponent img={'collections/dream/dream1.jpg'} title='dream' />
      <ImageHoverComponent img={'collections/calliope/calliope1.jpg'} title='calliope' />
    </Row>
    <Row className="d-flex" style={{ justifyContent: 'center' }}>
      <ImageHoverComponent img={'collections/athena/athena1.jpg'} title='athena' />
    </Row>
  </Container>;
};

export default Home;