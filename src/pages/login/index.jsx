import { Container, Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Msg } from "../../components/erroLogin";
import { useState } from "react";
import logo from "../../assets/Logo.svg";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: yup.string().min(4, "Mínimo de 4 caracteres!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    console.log(data);
    api
      .post("/auth/sign-in", data)
      .then((response) => {
        console.log(response);

        localStorage.setItem(
          "@token",
          JSON.stringify(response.headers["authorization"])
        );

        localStorage.setItem("@user", JSON.stringify(response.data["name"]));
        setError(false);
        navigate("/booklist");
      })
      .catch((e) => {
        console.log(e.response);
        setError(true);
      });
  };

  return (
    <Container>
      <div className="content">
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <p>Books</p>
        </div>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <div className="login">
            <div className="input-login input_email">
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu Email..."
                {...register("email")}
              />
            </div>
          </div>

          <div className="login">
            <div className="input-login_enter">
              <div className="input-login">
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="Digite sua Senha..."
                  {...register("password")}
                />
              </div>
              <button type="submit">Entrar</button>
            </div>
          </div>
          {error && <Msg />}
        </Form>
      </div>
    </Container>
  );
};
