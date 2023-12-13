import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Createblog from "./pages/CreateBlog/Createblog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBlog" element={<Createblog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
