import { NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./nav.module.css";
import { headers } from 'next/headers';

const links = [{
  href: 'repointing',
  text: 'Repointing',
  unavailableFrance: true
},
{
  href: '/gardening',
  text: 'Gardening'
},
{
  href: '/strimming',
  text: 'Clearance'
},
{
  href: 'installations',
  text: 'Installations'
},
{
  href: '/services',
  text: 'More Services'
}, {
  href: '/contact',
  text: 'Contact'
}];

function Navigation() {
  const headersList = headers();
  const unavaialbleFrance = headersList.get('host')!.includes('vueduvallon')
  const filteredLinks = unavaialbleFrance ? links.filter(link => !link.unavailableFrance) : links;

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
          Glenn The Handyman
        </NavbarBrand>
        <NavbarToggle
          className={styles.navbarButton}
          aria-controls="basic-navbar-nav"
        >

        </NavbarToggle>
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              filteredLinks.map(({ text, href }) =>
                <NavLink
                  key={text}
                  className={styles.navbarText}
                  href={href}
                >
                  {text}
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