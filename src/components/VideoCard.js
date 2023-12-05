import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Trash2 } from "react-feather";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import { removeVideo, watchHisoty } from "../services/allApi";
import uniqid from 'uniqid'
import { format } from "date-fns";
function VideoCard({ video, updateData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    // for watch history
    // get id
    let id=uniqid()
    // get date
    let time=format(new Date(),"mm/dd/yyyy h:mm a")
    // get viedeo title
    let title =video.title
    // get video url
    let videoURL=video.videoURL

    // make the data as a body
    var body={
      id,time,title,videoURL
    }
  // console.log(body);
  await watchHisoty(body)
  };

  const handleDelete = async (id) => {
    const result = await removeVideo(id);
    if (result.status >= 200 && result.status < 300) {
      updateData(result.data);
    }
  };

  const dragStarted=(e,id)=>{
    // console.log("video drag started at" + id);
    // to store video id
    e.dataTransfer.setData('videoId',id)
  }

  return (
    <div>
      <Container>
        <Card draggable onDragStart={(e)=>dragStarted(e,video?.id)} style={{ width: "18rem",marginTop:'20px' }}>
          <Card.Img
            onClick={handleShow}
            className="w-100"
            style={{ height: "200px" }}
            variant="top"
            src={video.coverImg}
          />
          <Card.Body className="bg-light" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Card.Title  className="bg-light"
              style={{ fontFamily: "cinzel", color: "#00B5CB" }}
            >
              {video?.title.length > 17
                ? video?.title.slice(0, 17) + "..."
                : video?.title}
            </Card.Title>
            <div
              className="text-center"
              style={{ backgroundColor: "", height: "40px",borderRadius:'10%',cursor:'pointer' }}
            >
              <Trash2 className="m-2"
                onClick={() => handleDelete(video.id)}
                style={{ color: "rgb(255, 239, 219)" }}
              ></Trash2>
            </div>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-light" closeButton>
            <Modal.Title className="bg-light "
              style={{ fontFamily: "cinzel", color: "#00B5CB" }}
            >
              {video.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-light">
            <iframe
              width="100%"
              height="250"
              src={video.videoURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>{" "}
    </div>
  );
}

export default VideoCard;
