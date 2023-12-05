import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApi'
import { Col, Row } from 'react-bootstrap'
import { Loader } from 'react-feather'
function Video({data}) {

  const [allVideos,setVideos]=useState([])
  const [deleteUpdate,setDeleteUpdate]=useState([])

  const getAllVideos=async ()=>{
    const result=await getVideos()
    setVideos(result.data)
  }

  useEffect(()=>{
    getAllVideos()
  },[data,deleteUpdate])

  console.log(allVideos);
  return (
    <Row className='container'>
      {
        allVideos?.length>0?
        allVideos?.map(i=>(
<Col lg={6}>
            <VideoCard updateData={setDeleteUpdate} video={i}></VideoCard>
  
</Col>
        ))
        :<Loader></Loader>
      }
    </Row>
  )
}

export default Video