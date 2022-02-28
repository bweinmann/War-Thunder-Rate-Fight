import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Navbar.css"
import Login from "../../Forms/Login/Login"

const newUserLinks = (
  <div className="nav-links mr-auto" style={{display: "flex"}}>
    <Login />
    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
    <Nav.Link as={Link} to="/couches">View Reviews</Nav.Link>
    {/* <SignOut /> */}
  </div>
)

const NavContainer = ({user}) => {
  return (
    <Navbar collapseOnSelect className="text-white" bg="dark" expand="md" sticky="top" fixed="top">
      <Navbar.Brand href="/">
        <img src="../../assets/emojisky.com-5722599.png" width="40" height="40"/> War Thunder Rate Fight
      </Navbar.Brand >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {newUserLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavContainer