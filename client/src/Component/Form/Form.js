import React, { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const pictureUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("productImage", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    setName("");
    setPrice("");
    setDescription("");

    const data = axios
      .post("http://localhost:8080/api/v1/users/register", formData)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h2
        className="mt-5 mb-5 text-center"
        style={{
          backgroundColor: "#1abc9c",
          color: "white",
          padding: "5px",
        }}
      >
        New Register
      </h2>
      <form onSubmit={addUserData} encType="multipart/form-data">
        <label className="text-center" style={{ color: "green" }}>
          {message}
        </label>
        <div className="form-group">
          <label className="text-muted">Photo</label>
          <input type="file" filen="productImage" onChange={pictureUpload} />
        </div>

        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            type="file"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          // onClick={(e) => addUserData(e)}
          className="btn btn-raised btn-success mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
