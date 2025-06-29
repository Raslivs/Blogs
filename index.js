const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model"); // ✅ adjusted to your file name

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());


// ✅ POST: Add blog
app.post("/add", async (req, res) => {
  try {
    const newPost = new BlogModel(req.body);
    await newPost.save();
    res.status(200).send({ message: "Post added successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding post" });
  }
});

// ✅ GET: Get blogs
app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching posts" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
