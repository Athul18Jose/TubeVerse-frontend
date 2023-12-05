import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid'
import { ToastContainer, toast } from 'react-toastify';
import { AddCatagories } from '../services/allApi';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import ViewCatagory from './ViewCatagory';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    videos: []
  })

  const [deleteUpdate, setDeleteUpdate] = useState("")


  const takeInput = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setInputs({ ...inputs, [name]: value });
  };

  const handleAdd = async () => {

    // for getting uniq id
    var id = uniqid()
    setInputs({ ...inputs, "id": id });

    // inputs enterd or not

    const { title } = inputs
    if (title == "") {
      toast.error('Please fill all fields ..!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const result = await AddCatagories(inputs)
      console.log(result);
      if (result.status >= 201 && result.status <= 300) {
        toast.success(`${result.data.title} has added to catagory!`, {

          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose()
        setInputs({
          id: "",
          title: "",
          videos: []
        })
      }
    }
  }
  console.log(inputs);



  return (
    <div className='container'>
      <Card style={{ width: '18rem' }}>
        <Card.Body style={{ backgroundColor: 'white', borderRadius: '14px' }}>
          <Card.Title className='text-center bg-light   ' style={{ fontFamily: 'cinzel', color: '#00B5CB', fontWeight: 'bolder' }}>Catagories</Card.Title>
          <hr style={{ backgroundColor: '#ffff', height: '5px', border: '1px solid #ffff' }} />
          <p className='p-2 me-5 bg-warning' style={{ textAlign: 'center', border: '2px solid #ffff', color: '#ffff', borderRadius: '25px', width: '90px', marginLeft: '26%', cursor: 'pointer', }} onClick={handleShow}>Add</p>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-light' closeButton>
          <Modal.Title className='bg-light'> Add Catagory</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-light'>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3 text-light"
          >
            <Form.Control
              onChange={(e) => takeInput(e)}
              type="text" name="title" placeholder="catagory name" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>

          <Button style={{ backgroundColor: '#00B5CB' }} onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Container>
        <ViewCatagory updateData={setDeleteUpdate}></ViewCatagory>
      </Container>

      <ToastContainer />

    </div>
  )
}

export default Category