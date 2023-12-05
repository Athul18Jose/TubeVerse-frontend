import React from "react";
import { useState, useEffect } from "react";
import {
  getCatagories,
  getVideo,
  removeCategory,
  updateCatagories,
} from "../services/allApi";
import { Col, Row } from "react-bootstrap";
import { Trash } from "react-feather";
import { Link } from "react-router-dom";

function ViewCatagory({ updateData }) {
  const [allCatagories, setCatagories] = useState([]);

  const getAllCatagories = async () => {
    const result = await getCatagories();
    if (result.status >= 200 && result.status <= 300) {
      setCatagories(result.data);
      // console.log(result.data);
      getAllCatagories();
    }
  };

  useEffect(() => {
    getAllCatagories();
  }, [updateData]);

  // console.log(allCatagories);

  const handleDelete = async (id) => {
    const result = await removeCategory(id);
    if (result.status >= 200 && result.status < 300) {
      updateData(result.data);
    }
  };
  const dragOver = (e, id) => {
    e.preventDefault();
    console.log("drag over" + id);
  };
  const dropped = async (e, id) => {
    console.log("dropped category id is" + id);
    let video = e.dataTransfer.getData("videoId");
    console.log("dropped video id" + video);

    // video
    const { data } = await getVideo(video);
    // console.log(data);
    // category
    let category = allCatagories.find((i) => i.id == id);
    console.log(category);
    category.videos.push(data);
    console.log(category);
    // update changes in json server
    await updateCatagories(id, category);
    await getAllCatagories();
  };
  return (
    <div className=" mt-5 ">
      <Row className="container">
        {allCatagories?.length > 0 &&
          allCatagories?.map((i) => (
            <Col lg={12}>
              
                <div
                  id="catt"
                  droppable
                  onDragOver={(e) => dragOver(e, i?.id)}
                  onDrop={(e) => dropped(e, i?.id)}
                >
                  <div
                    className="p-2 mb-3 btn"
                    style={{
                      border: "2px solid white",
                      fontFamily: "cinzel",
                      fontWeight: "bolder",
                      fontSize:'16px',
                      borderRadius: "25px",
                      color: "white",
                      width: "100%",
                    }}
                  >
                    {i.title}{" "}
                    <Trash
                      onClick={() => handleDelete(i.id)}
                      className="ms-5 me-1 text-end"
                      style={{ color: "grey" }}
                    ></Trash>
                    <Link to={`/single/category/${i.id}`}>
                    <hr />
                    <div className="d-flex justify-content-evenly">
                      {i?.videos?.map((item) => (
                        <div>
                          <img
                            style={{ width: "50%", height: "60%" }}
                            src={item.coverImg}
                            alt=""
                          />
                        </div>
                        
                      ))}
                    </div>
                    </Link>
                  </div>
                </div>
  
                          </Col>
          ))}
      </Row>
    </div>
  );
}

export default ViewCatagory;
