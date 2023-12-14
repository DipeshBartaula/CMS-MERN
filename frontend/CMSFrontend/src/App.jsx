import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Createblog from "./pages/CreateBlog/Createblog";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBlog" element={<Createblog />} />
        <Route path="/singleBlog/:id" element={<SingleBlog />} />
        <Route path="/updateBlog/:id" element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
