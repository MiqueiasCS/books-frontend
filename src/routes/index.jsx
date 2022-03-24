import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";

export const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<h1>Home</h1>} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};
