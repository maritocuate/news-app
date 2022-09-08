import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavbarB from 'react-bootstrap/Navbar'

import './styles.scss'

const Navbar = () => {
  return (
    <NavbarB className="navbar" expand="lg">
        <Container>
            <NavbarB.Brand
                className="text-light"
                href="#home"
                >Awesome News</NavbarB.Brand>
            <NavbarB.Toggle aria-controls="basic-navbar-nav" />
            <NavbarB.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link
                        className="navbar__link"
                        href="#home"
                        >Recent News</Nav.Link>
                    <Nav.Link
                        className="navbar__link"
                        href="#link"
                        >Top Rated</Nav.Link>
                    <Nav.Link
                        className="navbar__link"
                        href="#link"
                        >Categories</Nav.Link>
                </Nav>
            </NavbarB.Collapse>
        </Container>
    </NavbarB>
  )
}

export default Navbar
