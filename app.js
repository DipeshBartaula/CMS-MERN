const express = require("express");
const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connecting to database
connectDatabase();

//Fetching all blogs
app.get("/blogs", async (req, res) => {
  //fetching all blogs from Blog model
  const blogs = await Blog.find();

  //check if blogs contains data or not
  if (blogs.length == 0) {
    return res.json({
      status: 404,
      message: "No blog yet",
    });
  } else {
    return res.json({
      status: 200,
      message: "Blogs fetched successfully",
      blogs: blogs,
    });
  }
});

//Fetch single blog
app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.find({ _id: id });

  if (blog.length == 0) {
    return res.status(404).json({
      message: "No blog found with that id",
    });
  } else {
    return res.status(200).json({
      message: "Blog fetched successfully",
      blog: blog,
    });
  }
  //Alternative
  //const blog = await Blog.findById(id);
  // if (blog) {
  //   res.status(200).json({
  //     message: "Fetch successfully",
  //     data: blog,
  //   });
  // } else {
  //   res.status(404).json({
  //     message: "No blog found",
  //   });
  // }
});

//Create blog api
app.post("/createBlog", async (req, res) => {
  const title = req.body.title;
  const subTitle = req.body.subTitle;
  const description = req.body.description;

  //Insert into database logic
  await Blog.create({
    title,
    subTitle,
    description,
  });

  return res.json({
    status: 200,
    message: "Blog created successfully",
  });

  //Alternative
  // res.status(200).json({
  //   message: "Blog created successfully"
  // })
});

//Update blog
app.patch("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const subTitle = req.body.subTitle;
  const description = req.body.description;
  // const {title,subTitle,description} = req.body  //Alternative

  await Blog.findByIdAndUpdate(id, {
    title: title,
    subTitle: subTitle,
    description: description,
  });

  return res.status(200).json({
    message: "Updated successfully",
  });
});

//Delete api
app.delete("/blogs/:id", async (req, res) => {
  const id = req.params.id;

  await Blog.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Deleted successfully",
  });
});

app.listen(3000, () => {
  console.log("Nodejs started at port 3000");
});
