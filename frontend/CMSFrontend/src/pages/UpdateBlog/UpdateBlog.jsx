import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./UpdateBlog.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({});

  //Function for third approach
  const handleCreate = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const updateBlog = async (e) => {
    e.preventDefault();
    //Posting data to backend
    const response = await axios.patch(
      "http://localhost:3000/blogs/" + id,
      blog
    );
    // console.log(response);
    if (response.status == 200) {
      alert(response.data.message);
      navigate("/");
    } else {
      alert("Something went wrong", response.data.message);
    }
  };

  //Fetching single blog value
  const fetchSingleBlogValue = async () => {
    const response = await axios.get("http://localhost:3000/blogs/" + id);
    // console.log(response.data.blog);
    setBlog(response.data.blog[0]);
  };

  useEffect(() => {
    fetchSingleBlogValue();
  }, []);

  return (
    <>
      <Navbar />
      <form className="interactive-form" onSubmit={updateBlog}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={blog.title}
          name="title"
          placeholder="Enter title"
          onChange={handleCreate}
          required
        />

        <label htmlFor="subtitle">Subtitle:</label>
        <input
          type="text"
          id="subtitle"
          value={blog.subTitle}
          name="subTitle"
          placeholder="Enter subtitle"
          onChange={handleCreate}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={blog.description}
          name="description"
          placeholder="Enter description"
          rows="4"
          onChange={handleCreate}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UpdateBlog;
