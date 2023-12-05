import React from 'react'
import { Trash } from 'react-feather'
import Table from 'react-bootstrap/Table';
import "./landing.css";
import { Container } from 'react-bootstrap';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react'
import { removeHistory, viewHistory } from '../services/allApi'
import { Link } from 'react-router-dom';

function Watch() {
  const [history,setWatchHistory]=useState([])

  const getWatchHistory=async ()=>{
    const result=await viewHistory()
    setWatchHistory(result.data)
  }

  useEffect(()=>{
    getWatchHistory()
  },[])

  const handelDelete=async(id)=>{
await removeHistory(id)
  getWatchHistory()
  }
  return (
    <>
      
      <Container style={{marginTop:'100px'}}>
        <Link to={'/home'} style={{color:'white'}}><i class="fa-solid fa-arrow-left"></i> Back to home</Link>
        <h1 className='text-center mb-5' style={{color:'white',fontFamily:'cinzel'}}>Watch History</h1>
        </Container>
      {
        history?.length>0?
     

<div>
  <Container >
  
          <Table striped="columns" style={{backgroundColor:'white'}}>
          <thead style={{fontFamily:'cinzel',color:'rgb(255, 239, 219)',backgroundColor:'white'}}>
            <tr className='bg-light'>
              <th>#</th>
              <th>Video</th>
              <th>Date</th>
              <th>Video URL</th>
              <th></th>
            </tr>
          </thead>
         
          <tbody>
            {
          history?.map((i,index)=>(
            <tr className='bg-light'>
              <td>{index+1}</td>
              <td>{i?.title}</td>
              <td>{i?.time}</td>
              <td>{i?.videoURL}</td>
              <td> <button style={{backgroundColor:'#00B5CB'}} className='btn'><Trash className='text-danger' onClick={()=>handelDelete(i?.id)}></Trash></button> </td>
    
            </tr>
 ))
          }
          </tbody>

        </Table>
        </Container>
</div>
     
      :<Loading></Loading>
}
   </>
  )
}

export default Watch