import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Books } from "../pages/booklist";

export const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/booklist" element={<Books />} />
    </Routes>
  );
};
