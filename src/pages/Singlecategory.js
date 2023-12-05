import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSingleCat, updateCatagories } from '../services/allApi';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { Container } from 'react-bootstrap';

function Singlecategory() {
  const { id } = useParams()
  // console.log(id);
  const [cat, setCat] = useState()
  const getSingleCategory = async () => {
    const result = await getSingleCat(id)
    setCat(result.data);
    console.log(result);

  }
  console.log(cat);

  const handleVideoDelete = async (videoId) => {
    const updatedVideos = cat.videos.filter((video) => video.id !== videoId);

    // Update the category with the new videos array
    await updateCatagories(id, { ...cat, videos: updatedVideos });


  }
  useEffect(() => {
    getSingleCategory()
  }, [])

  return (
    <div >
      <Container style={{ marginTop: '100px' }}>
        <Link to={'/home'} style={{ color: 'white' }}><i class="fa-solid fa-arrow-left"></i> Back to home</Link>
        <h1 className='text-center mb-5' style={{ color: 'white', fontFamily: 'cinzel' }}>{cat?.title}</h1>
      </Container>

      <div className='d-flex container'>
        {cat && cat.videos && cat.videos.length > 0 && // Check if cat is not null or undefined and videos array exists
          cat.videos.map((video) => (
            <div className='p-3 m-3' key={video.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: "100%", height: "250px" }} variant="top" src={video.coverImg} />
                <Card.Body className='bg-light'>
                  <Card.Title className='bg-light'>{video.title}</Card.Title>
                  <hr />
                  <div className='text-center bg-light'>
                    <Button style={{ backgroundColor: "#00B5CB" }}>

                      <Trash2 onClick={() => handleVideoDelete(video.id)} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>)
}

export default Singlecategory

