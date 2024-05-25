import { NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./nav.module.css";

const links = [{
  href: '/pressure-wash',
  text: 'Pressure Wash'
}, {
  href: '/gardening',
  text: 'Gardening'
}, {
  href: '/strimming',
  text: 'Strimming'
}, {
  href: '/contact',
  text: 'Contact'
}

]

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
            { 
              links.map(({ text, href }) => 
                <NavLink
                  key={ text }
                  className={styles.navbarText}
                  href={ href }
                >
                  { text }
                </NavLink>  
              )
            }
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;