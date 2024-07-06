import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer"
import { COLORS } from "../colors";

const Layout = () => {
  function ScrollToTop() {
    const location = useLocation();
    const hashFragment = location.hash.substring(1);

    useEffect(() => {
      if (hashFragment) {
        return;
      }
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  }

  return (
    <div style={{
      // backgroundColor: '#F3EBDE',
      backgroundColor: COLORS.beige,
      height: '100vh'
    }}>
      <Container>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
