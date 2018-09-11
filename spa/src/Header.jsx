import React, { Component } from "react"
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap"

class Header extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md" className="navigation-bar">
        <NavbarBrand href="/">Blockchain-based IoT in agriculture</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="nav-item" href="/">
              Blockchain
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-item" href="/dashboard">
              Visualization
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Header
