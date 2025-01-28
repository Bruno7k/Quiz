import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
}
