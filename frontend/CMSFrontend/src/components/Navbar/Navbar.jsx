import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="navbar">
          <a onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Home
          </a>
          <a
            onClick={() => navigate("/createBlog")}
            style={{ cursor: "pointer" }}
          >
            CreateBlog
          </a>
          <a href="#services">SingleBlog</a>
          <a href="#contact">Edit</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
