import { FaNewspaper } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavbarB from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

import './styles.scss'

const Navbar = () => {
  return (
    <NavbarB className="navbar" expand="lg">
        <Container fluid>
            <NavbarB.Brand
                className="d-flex align-items-center text-light">
                <FaNewspaper className='m-2' />
                Awesome News
            </NavbarB.Brand>
            <NavbarB.Toggle aria-controls="basic-navbar-nav" />
            <NavbarB.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link
                        className="navbar__link"
                        as={Link}
                        to="/recent"
                    >Recent News</Nav.Link>
                    <Nav.Link
                        className="navbar__link"
                        as={Link}
                        to="/toprated"
                        >Top Rated</Nav.Link>
                    <Nav.Link
                        className="navbar__link"
                        as={Link}
                        to="/categories"
                        >Categories</Nav.Link>
                </Nav>
            </NavbarB.Collapse>
        </Container>
    </NavbarB>
  )
}

export default Navbar
