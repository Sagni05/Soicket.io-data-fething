import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Home = ({ getProducts }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center mt-2">Socket Io</h2>

        <div className=" text-end">
          <Button
            variant="primary"
            className="col-lg-2"
            onClick={() => navigate("/register")}
          >
            + Add new
          </Button>
        </div>
        <div className="row d-flex justify-content-between align-items-center mt-5">
          {getProducts?.length > 0 ? (
            getProducts?.map((data, index) => (
              <Card
                style={{ width: "22rem", height: "18rem" }}
                className="mb-3"
                key={index}
              >
                <Card.Title
                  className="text-center"
                  style={{
                    margin: "2px",
                    color: "#008B8B",
                  }}
                >
                  {data.name}
                </Card.Title>
                <Card.Img
                  className="mt-2"
                  variant="top"
                  src={`http://localhost:8080/public/uploads/${data.image}`}
                  style={{
                    width: "100px",
                    margin: "auto",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                />
                <Card.Body className="text-center">
                  <small style={{ color: "#FFA500" }}>
                    <span style={{ color: "	#D2691E" }}>Price:</span>{" "}
                    {data.price}
                  </small>{" "}
                  <br />
                  <Button variant="danger" className="col-lg-3 m-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2874/2874821.png"
                      height="20px"
                      width="20px"
                    />
                  </Button>
                  <Button variant="success" className="col-lg-3 m-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/722/722358.png"
                      height="20px"
                      width="20px"
                    />
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h1 className="text-center" style={{ color: "red" }}>
              There is Nothing Plz Add!
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
