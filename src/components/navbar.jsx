import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/navbar.min.css';

export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div id="nav-main">
            <Router>
                <Navbar dark expand="xl">
                    <NavbarBrand href="/">
                        <strong className="brand-tra">Tra</strong><strong className="brand-vel">vel</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left id="nav-left">
                          <NavItem active>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Explore</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Packages</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Offers</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Contact</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right id="nav-right">
                          <NavItem>
                            <Button color="primary" rounded>Book Now</Button>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        </div>
        );
    }
}