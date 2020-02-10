import React, { Component } from 'react';
import { Navbar, Nav, NavItem, InputGroupAddon, InputGroupText, Input, InputGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar dark expand="md">
          <div className="container">
            <Nav className="mr-auto">
            <Link to="/home">
            <svg className="ml-1" aria-label="Instagram" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M13.86.13A17 17 0 008 1.26 11 11 0 003.8 4 12.22 12.22 0 001 8.28 18 18 0 00-.11 14.1c-.13 2.55-.13 3.38-.13 9.9s0 7.32.13 9.9A18 18 0 001 39.72 11.43 11.43 0 003.8 44 12.17 12.17 0 008 46.74a17.75 17.75 0 005.82 1.13c2.55.13 3.38.13 9.9.13s7.32 0 9.9-.13a17.82 17.82 0 005.83-1.13A11.4 11.4 0 0043.72 44a11.94 11.94 0 002.78-4.24 17.7 17.7 0 001.13-5.82c.13-2.55.13-3.38.13-9.9s0-7.32-.13-9.9a17 17 0 00-1.13-5.86A11.31 11.31 0 0043.72 4a12.13 12.13 0 00-4.23-2.78A17.82 17.82 0 0033.66.13C31.11 0 30.28 0 23.76 0s-7.31 0-9.9.13m.2 43.37a13.17 13.17 0 01-4.47-.83 7.25 7.25 0 01-2.74-1.79 7.25 7.25 0 01-1.79-2.74 13.23 13.23 0 01-.83-4.47c-.1-2.52-.13-3.28-.13-9.7s0-7.15.13-9.7a12.78 12.78 0 01.83-4.44 7.37 7.37 0 011.79-2.75A7.35 7.35 0 019.59 5.3a13.17 13.17 0 014.47-.83c2.52-.1 3.28-.13 9.7-.13s7.15 0 9.7.13a12.78 12.78 0 014.44.83 7.82 7.82 0 014.53 4.53 13.12 13.12 0 01.83 4.44c.13 2.51.13 3.27.13 9.7s0 7.15-.13 9.7a13.23 13.23 0 01-.83 4.47 7.9 7.9 0 01-4.53 4.53 13 13 0 01-4.44.83c-2.51.1-3.28.13-9.7.13s-7.15 0-9.7-.13m19.63-32.34a2.88 2.88 0 102.88-2.88 2.89 2.89 0 00-2.88 2.88M11.45 24a12.32 12.32 0 1012.31-12.35A12.33 12.33 0 0011.45 24m4.33 0a8 8 0 118 8 8 8 0 01-8-8"></path></svg>
            <img className="ml-2 mt-1" src="/assets/images/logo.png" alt='logo' width='103' height='29'/>
            </Link>
            </Nav>
            <Nav className="d-none d-md-flex" navbar>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                <i className="fa fa-search"></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Search" style={{boxShadow: 'none'}}/>
            </InputGroup>
            </Nav>
            <Nav className="ml-auto d-none d-md-flex" navbar>
              <NavItem className="m-3">
                <span className="fa fa-safari fa-lg"></span>
              </NavItem>
              <NavItem className="m-3">
                <span className="fa fa-heart-o fa-lg"></span>
              </NavItem>
              <NavItem className="m-3">
                <span className="fa fa-user-o fa-lg"></span>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
			</div>
		);
	}
}

export default Header;