import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./landing.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <Row className="mt-5">
        <Col lg={6} className="text-center mt-5 mb-5">
          <p className="h2">A branded player is a given & <br /> hybrid hosting is the floor</p>

          <p className="para mt-5">You probably heard that Spotlightr lets you brand your videos. <br /> And it’s true! In less than 2 minutes, you can have your own <br /> branded player and watch page with your embedded logo <br /> and color palette. <br /><br />

            Or you’ve heard about hybrid hosting. Also true. Because we’re <br /> both a player and host, you can host your files wherever you <br /> like and still benefit from our player.</p>
          <Link to={'/home'}>
            <button className=" bt1 btt">Videos</button>

          </Link >
        </Col>
        <Col lg={6} className="back"></Col>

      </Row>

      <Container className="c3 mb-4">
        <Row className="mb-3">
          <Col lg={4}> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/10/ae/d9/10aed99a89bcd8ca74b6283d30db4a52.gif" />
            <Card.Body className="bg-light">
              <Card.Title className="head bg-light text-center fw-bold">Manage Videos</Card.Title>
              <Card.Text className="bg-light">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className="text-center" >
              <Button style={{backgroundColor:'#00B5CB'}}>Manage Videos</Button>
              </div>
              
            </Card.Body>
          </Card></Col>
          <Col lg={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/83/46/f4/8346f4d15db10df3e612e7259f7f9672.gif" />
              <Card.Body className="bg-dark">
                <Card.Title className="head bg-dark text-light text-center">Catagorize Video</Card.Title>
                <Card.Text  className="bg-dark text-light">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="text-center" >
              <Button style={{backgroundColor:'#00B5CB'}}>Catagorize Videos</Button>
              </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.dribbble.com/users/141880/screenshots/2431840/dailyui-057.gif" />
              <Card.Body className="bg-light">
                <Card.Title className="head bg-light text-center">Watch History</Card.Title>
                <Card.Text className="bg-light">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="text-center" >
              <Button style={{backgroundColor:'#00B5CB'}}>Watch History</Button>
              </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="c2 my-5">
        <Row>
          <Col lg={6}>
            <img className="img" src="https://www.smashingapps.com/wp-content/uploads/2016/04/animatedgifs6.gif" alt="" />
          </Col>
          <Col lg={6} style={{ textAlign: "left" }}>
            <h2 className="text-light headline1 design-b-sub">Simplify Content Creation, Upload Video Online In Seconds</h2>
            <p>Busy businesses, agencies, and teams can benefit from the free video upload service offered by Simplified. With this technology, you can upload video online free to an integrated artboard directly from Google Drive or your computer; this makes for a simpler workflow and saves time in the long run. Try it out today and take your small business, agency, or team to higher heights!</p>
            <Link to={'/home'} >
              <button className=" bt1">Upload Video File</button>

            </Link></Col>
        </Row>
      </Container>
    </>
  );
}

export default Landing;
