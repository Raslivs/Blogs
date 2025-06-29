import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    image: "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = () => {
    axios
      .post("http://localhost:5000/posts", inputs) // <-- Update as per backend
      .then((res) => {
        alert("Blog added successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "600px",
        }}
      >
        <TextField
          label="Title"
          name="title"
          value={inputs.title}
          onChange={inputHandler}
          fullWidth
        />
        <TextField
          label="Content"
          name="content"
          value={inputs.content}
          onChange={inputHandler}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          label="Image URL"
          name="image"
          value={inputs.image}
          onChange={inputHandler}
          fullWidth
        />
        <TextField
          label="Category"
          name="category"
          value={inputs.category}
          onChange={inputHandler}
          fullWidth
        />
        <Button variant="contained" color="secondary" onClick={addData}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
