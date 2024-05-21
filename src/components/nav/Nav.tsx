import { NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./nav.module.css";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      className={styles.navbar}
      variant="dark"
    >
      <Container>
        <NavbarBrand
          href="/"
          className={styles.navbarText}
        >
          Vue Du Vallon Handyman
        </NavbarBrand>
        <NavbarToggle
          className={styles.navbarButton}
          aria-controls="basic-navbar-nav"
        >

        </NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={styles.navbarText}
              href="/pressure-wash"
            >
              Pressure Wash
            </NavLink>
            <NavLink
              className={styles.navbarText}
              href="/gardening"
            >
              Gardening
            </NavLink>

            <NavLink
              className={styles.navbarText}
              href="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;