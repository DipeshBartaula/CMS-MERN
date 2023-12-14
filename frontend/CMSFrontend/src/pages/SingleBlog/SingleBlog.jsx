import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  //Deleting the blog
  const deleteBlog = async () => {
    const response = await axios.delete("http://localhost:3000/blogs/" + id);
    if (response.status == 200) {
      navigate("/");
    }
  };

  //Fetching single blog
  const fetchSingleBlog = async () => {
    const response = await axios.get("http://localhost:3000/blogs/" + id);
    // console.log(response.data.blog);
    setBlog(response.data.blog[0]);
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);
  //   console.log(blog);
  return (
    <div className="blog-container">
      <h1 className="blog-title">{blog.title}</h1>
      <h2 className="blog-subtitle">{blog.subTitle}</h2>
      <p className="blog-description">{blog.description}</p>
      <button onClick={deleteBlog}>Delete</button>
      <Link to={`/updateBlog/${blog._id}`}>
        <button style={{ margin: "20px" }}>Update</button>
      </Link>
    </div>
  );
};

export default SingleBlog;
