import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Add from '../components/Add';
import { Link } from 'react-router-dom';
import home1 from '../Assets/home1.png'
import Video from '../components/Video';
import Category from '../components/Category';
import "./landing.css"

function Home() {

  // satet for state lifitng
  const [addUpdate, setAddUpdate] = useState("")
  return (
    <>


      <Container style={{ marginTop: '60px' }} className='mt-5 mb-5'>
        <Row className='mt-5'>
          <Col lg={6}>
            <img style={{ height: '380px', width: '90%' }} src={home1} alt="" />

          </Col>
          <Col lg={6} className='mt-5'>
            <h1 style={{ color: 'white', fontFamily: 'cinzel' }}>Start Uploading Videos</h1>
            <p style={{ fontFamily: 'playfair', fontSize: '18px', paddingBottom: '15px', paddingTop: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim, culpa fugiat delectus itaque
              sed assumenda a nisi dolorem reiciendis,
              in ipsum unde maxime, velit sunt cumque aliquam hic asperiores?Lorem ipsum,
              dolor sit amet consectetur adipisicing elit..</p>
            <div style={{display:'flex', alignItems:'center', justifyContent:"space-around"}}>

              <Add updateData={setAddUpdate}></Add>

              <Link to={'/history'} className='mt-4'>
                <button className='btn btn-warning'>
                <i class="fa-solid fa-clock-rotate-left bg-warning"></i> Watch History
                </button>
              
              </Link>

            </div>
          </Col>
        </Row>

      </Container>
      <Container className='mt-5 p-3'>
        <Row>
          <Col lg={4}>
            <Category></Category>
          </Col>

          <Col lg={8}>
            <Video data={addUpdate}></Video>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home