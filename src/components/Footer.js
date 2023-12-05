import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <MDBFooter style={{color:'#00B5CB'}} className='text-center text-lg-start bg-light'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-light'>
          <div className='me-5 d-none d-lg-block bg-light'>
            <span className='bg-light'>Get connected with us on social networks:</span>
          </div>

          <div className='bg-light'>
            <a href='' className='me-4 text-reset bg-light'>
              <MDBIcon fab icon="facebook-f" className='bg-light' />
            </a>
            <a href='' className='me-4 text-reset bg-light'>
              <MDBIcon fab icon="twitter" className='bg-light' />
            </a>
            <a href='' className='me-4 text-reset bg-light'>
              <MDBIcon fab icon="google" className='bg-light'/>
            </a>
            <a href='' className='me-4 text-reset bg-light'>
              <MDBIcon fab icon="instagram" className='bg-light'/>
            </a>
            <a href='' className='me-4 text-reset bg-light'>
              <MDBIcon fab icon="linkedin" className='bg-light' />
            </a>
            <a href='' className='me-4 text-reset bg-light'>
              <MDBIcon fab icon="github" className='bg-light'/>
            </a>
          </div>
        </section>

        <section className='bg-light'>
          <MDBContainer className='text-center bg-light text-md-start mt-5'>
            <MDBRow className='mt-3 bg-light'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 bg-light'>
                <h6 style={{ fontFamily: 'Nova Square', fontWeight: 'bolder' }} className='text-uppercase fw-bold mb-4 bg-light'>
                  <MDBIcon icon="gem" className="me-3 bg-light"/>
                  TubeVerse
                </h6>
                <p className='bg-light'>
                  WatchWhirl is a cutting-edge video streaming app designed to provide you with an immersive and
                  seamless video-watching experience. With a user-friendly interface and a vast library of content,
                  it offers an extensive collection of movies, TV shows, documentaries, and more.
                </p>
              </MDBCol>


              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 bg-light'>
                <h6 className='text-uppercase fw-bold mb-4 bg-light'>Useful links</h6>
                <p className='bg-light'>
                  <Link to={'/'} className='bg-light'  style={{textDecoration:'none',color:'#00B5CB'}}>
                    Home

                  </Link>              </p>
                <Link to={'/home'} className='bg-light'  style={{textDecoration:'none',color:'#00B5CB'}}>
                  <p className='bg-light'>

                    Upload

                  </p>
                </Link>
                <Link to={'/history'} className=' bg-light'  style={{textDecoration:'none',color:'#00B5CB'}}>
                  <p className='bg-light'>
                    Watch History
                  </p>

                </Link>              <p className='bg-light'>
                  Help
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 bg-light'>
                <h6 className='text-uppercase fw-bold mb-4 bg-light'>Contact</h6>
                <p className='bg-light'>
                  <MDBIcon icon="home" className="me-2 bg-light" />
                  New York, NY 10012, US
                </p>
                <p className='bg-light'>
                  <MDBIcon icon="envelope" className="me-3 bg-light" />
                  info@example.com
                </p>
                <p className='bg-light'>
                  <MDBIcon icon="phone" className="me-3 bg-light" /> + 01 234 567 88
                </p>
                <p className='bg-light'>
                  <MDBIcon icon="print" className="me-3 bg-light" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright:
          <a className='text-reset fw-bold bg-light' href='/'>
          TubeVerse.com
          </a>
        </div>
      </MDBFooter>
    </div>
  )
}

export default Footer