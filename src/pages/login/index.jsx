import { Container } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const Login = () => {
  const navigate = useNavigate();

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
        navigate("/booklist");
      })
      .catch((e) => console.log(e.response));
  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu Email..."
              {...register("email")}
            />
          </div>

          <div>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua Senha..."
              {...register("password")}
            />
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
};
