import { Container } from "./styles";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/modal";
import { Card } from "../../components/bookCard";
import logo from "../../assets/Logob.svg";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export const Books = () => {
  const [booklist, setBookList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [book, setBook] = useState(false);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@user");
    navigate("/");
  };

  const handlePage = (num) => {
    if ((num < 0 && page >= 2) || (num > 0 && page > 0)) {
      let newPage = page + num;
      setPage(newPage);
    }
  };

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("@token"));
    let username = JSON.parse(localStorage.getItem("@user"));

    if (!token) {
      navigate("/");
    }

    setUser(username);

    api
      .get("/books", {
        params: { page: `${page}`, amount: "12" },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setBookList(response.data.data);
      })
      .catch((e) => {
        console.log(e.response);
        navigate("/");
      });
  }, [page]);

  return (
    <Container>
      <header>
        <div>
          <img src={logo} alt="logob" />
          <p>Books</p>
        </div>
        <nav>
          <p className="user">Bem vindo, {user}!</p>
          <FiLogOut onClick={handleLogout} />
        </nav>
      </header>

      <div className="cards">
        {booklist.map((item, index) => (
          <Card
            key={index}
            book={item}
            setBook={setBook}
            setOpenModal={setOpenModal}
          />
        ))}
      </div>

      {openModal && <Modal setOpenModal={setOpenModal} book={book} />}
      <footer className="pagination">
        <IoIosArrowDropleft onClick={() => handlePage(-1)} />
        <p>páginas {page} de 100</p>
        <IoIosArrowDropright onClick={() => handlePage(1)} />
      </footer>
    </Container>
  );
};
