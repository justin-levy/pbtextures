import { Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import { Row, Col } from "react-bootstrap";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div style={{
      backgroundColor: '#F3EBDE',
      height: '100vh'
    }}>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
