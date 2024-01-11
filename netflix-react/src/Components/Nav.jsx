import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import Logo from '../img/logo.png'

export default function Menu() {
  return (
    <Navbar expand="lg" className="py-2 px-3 navbar" collapseOnSelect variant="dark" >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="120"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='link'>Home</Nav.Link>
          <Nav.Link href="#" className='link text-white'>Tv Shows</Nav.Link>
          <Nav.Link href="#" className='link'>Movies</Nav.Link>
          <Nav.Link href="#link" className='link'>Recently Added</Nav.Link>
          <Nav.Link href="#link" className='link'>My List</Nav.Link>
        </Nav> 
        <Nav className='ms-auto'>
          <Nav.Link href="#link" className='emoji pb-2 pe-3'><i className="bi bi-search"></i></Nav.Link>
          <Nav.Link href="#link" className='kids'>KIDS</Nav.Link>
          <Nav.Link href="#link" className='emoji pb-2 pe-3'><i className="bi bi-bell-fill"></i></Nav.Link>
          <Nav.Link href="#link" className='emoji pb-2 pe-2'><i className="bi bi-person-fill"></i></Nav.Link>
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
  )
}
