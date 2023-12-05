import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./component.css";
import uniqid from 'uniqid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddVideos } from "../services/allApi";

function Add({ updateData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // create a new state to hold input values
  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    coverImg: "",
    videoURL: ""
  });

  const takeInput = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setInputs({ ...inputs, [name]: value });
  };

  // to convert youtube url to embeded url
  // https://www.youtube.com/watch?v=yNhC4FTehO8   to https://www.youtube.com/embed/yNhC4FTehO8?si=iyobDb0J2zE_eGb6?autoplay=1
  const convertURL = (e) => {
    var url = e.target.value
    url = url.slice(-11,)
    var convertedURL = `https://www.youtube.com/embed/${url}?autoplay=1`
    const { name } = e.target
    setInputs({ ...inputs, [name]: convertedURL });

  }

  const handleAdd = async () => {

    // for getting uniq id
    var id = uniqid()
    setInputs({ ...inputs, "id": id });

    // inputs enterd or not

    const { title, coverImg, videoURL } = inputs
    if (title == "" || coverImg == "" || videoURL == "") {
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
      const result = await AddVideos(inputs)
      console.log(result);
      if (result.status >= 201 && result.status <= 300) {
        toast.success(`${result.data.title} has added successfully!`, {
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
          coverImg: "",
          videoURL: ""
        })
        updateData(result.data)
      }
    }
  }
  console.log(inputs);



  return (
    <div className="text-center" style={{ fontFamily: "cinzel" }}>
      <button
        onClick={handleShow}
        className="bt1 ms-5 p-2 ps-3 pe-3 mt-4 text-center"
      >
        <i
          class="fa-solid fa-upload fa-fade fa-l bg-warning"
          style={{ color: "white" }}
        ></i>{" "}
        Upload
      </button>

      <Modal style={{ backgroundColor: 'none' }} show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: "white" }}
          closeButton
        >
          <Modal.Title className="bg-light" style={{ color: '#00B5CB' }}>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <FloatingLabel style={{ color: 'white', backgroundColor: 'white' }}
            controlId="floatingInput"
            label="Caption"
            className="mb-3 bg-light"
          >
            <Form.Control
              className="bg-light"
              onChange={(e) => takeInput(e)}
              type="text"
              name="title"
              placeholder="New Video"
            />
          </FloatingLabel>
          <FloatingLabel style={{ color: 'white' }}
            controlId="floatingInput1"
            label="Cover Image URL"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => takeInput(e)}
              type="text"
              name="coverImg"
              placeholder=""
            />
          </FloatingLabel>
          <FloatingLabel style={{ color: 'white', fontFamily: 'cinzel' }}
            controlId="floatingInput2"
            label="Video URL"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => convertURL(e)}
              type="text"
              name="videoURL"
              placeholder=""
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "white" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: '#00B5CB' }} onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />

    </div>
  );
}

export default Add;
