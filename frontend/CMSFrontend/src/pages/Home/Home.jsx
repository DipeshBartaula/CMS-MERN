import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchAllBlog = async () => {
    const response = await axios.get("http://localhost:3000/blogs");
    setBlogs(response.data.blogs);
  };
  useEffect(() => {
    fetchAllBlog();
  }, []);
  return (
    <>
      <Navbar />
      <div className="card-container" style={{ width: "90%" }}>
        {blogs
          ? blogs.map((blog) => {
              return (
                <div key={blog._id} className="card">
                  <h2 className="card-title">{blog.title}</h2>
                  <h3 className="card-subtitle">{blog.subTitle}</h3>
                  <p className="card-description">{blog.description}</p>
                  <Link to={"/singleBlog/" + blog._id}>See more</Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Home;
