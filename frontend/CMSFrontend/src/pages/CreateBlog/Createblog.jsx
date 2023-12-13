import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Createblog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createblog = () => {
  const navigate = useNavigate();

  //First approach using useState, onChange attribute
  //   const [title, setTitle] = useState("");
  //   const [subTitle, setSubTitle] = useState("");
  //   const [description, setDescription] = useState("");

  //Third approach: using One useState
  //   const [data, setData] = useState({
  //     title: "",
  //     subTitle: "",
  //     description: "",
  //   });

  //Function for third approach
  //   const handleCreate = (e) => {
  //     // console.log(e.target.name, e.target.value);
  //     const { name, value } = e.target;
  //     setData({
  //       ...data,
  //       [name]: value,
  //     });
  //   };

  const createBlog = async (e) => {
    e.preventDefault();

    //First approach
    // const data = {
    //   title,
    //   subTitle,
    //   description,
    // };

    //Second approach: only two lines , for this 'name' attribute value must match with backend api key
    //Preferred approach
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    //Posting data to backend
    const response = await axios.post("http://localhost:3000/createBlog", data);
    // console.log(response);
    if (response.status == 200) {
      alert(response.data.message);
      navigate("/");
    } else {
      alert("Something went wrong", response.data.message);
    }
  };
  //   console.log(title, subTitle, description);
  return (
    <>
      <Navbar />
      <form className="interactive-form" onSubmit={createBlog}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
          //   onChange={(e) => setTitle(e.target.value)}
          //   onChange={handleCreate}
          required
        />

        <label htmlFor="subtitle">Subtitle:</label>
        <input
          type="text"
          id="subtitle"
          name="subTitle"
          placeholder="Enter subtitle"
          //   onChange={(e) => setSubTitle(e.target.value)}
          //   onChange={handleCreate}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          rows="4"
          //   onChange={(e) => setDescription(e.target.value)}
          //   onChange={handleCreate}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Createblog;
