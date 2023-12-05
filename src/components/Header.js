import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'

function Header() {
  return (
    <>

           <Navbar className='bg-light mb-5' style={{position:'fixed',width:'100%',zIndex:'100',top:'0'}}>
            <Link to={'/'} style={{textDecoration:'none',backgroundColor:'white'}}>
           <img
                alt=""
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top ms-4"
                style={{ margin: 0,backgroundColor:"white" }}
              />{' '}
              <span className='ms-2' style={{color:'#00B5CB',backgroundColor:'white', fontSize:'26px',fontFamily: 'Nova Square',fontWeight:'bolder'}}>TubeVerse</span>
              </Link>
        </Navbar>
  
    </>
  )
}

export default Header