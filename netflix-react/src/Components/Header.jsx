import React from 'react'
import Nav from './Nav';
import {Container, Dropdown} from 'react-bootstrap';


const Header = () => {
    return (
        <div className='header'>
            {/*Inizio Navbar */}
            <Nav/>
            {/*Fine Navbar */}

            {/*Inizio Jumbotron*/} 
            <div className="d-flex align-items-center justify-content-between pt-5 mb-5">
                <Container className="ps-4 pt-4 d-flex">
                    <div className="d-flex align-items-center">
                        <h2 className="mb-4 text-white">TV Shows</h2>
                        <Dropdown className="mx-2 pt-1 ps-2">
                            <Dropdown.Toggle id='genres'>
                                Genre
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                                <Dropdown.Item href="#">Drama</Dropdown.Item>
                                <Dropdown.Item href="#">Thriller</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='grid pt-1'>
                        <i className="bi bi-grid-fill pe-3"></i>
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                    </div>
                </Container>
            </div>
            
            
            {/*Fine Jumbotron*/} 
        </div>
    )
}
export default Header;