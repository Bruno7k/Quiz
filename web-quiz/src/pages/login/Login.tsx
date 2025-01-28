import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import PrimaryInput from "../../components/Inputs/PrimaryInput/PrimaryInput";
import LoginRegisterLogoSide from "../../components/LoginRegisterLogoSide/LoginRegisterLogoSide";
import LoginRequestDTO from "../../models/LoginRequestDTO";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const login = new LoginRequestDTO(email, password);

    try {
      // chamando o metodo do serviço de autenticação
      const response = await loginUser(login);

      //salvando o token e o id do usuário no localStorage
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("idUser", String(response.usuario.id));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <LoginRegisterLogoSide />

      <div className="login-area">
        <h1>Entre em sua conta!</h1>
        <form onSubmit={handleLogin}>
          <PrimaryInput
            type="email"
            placeholder="Email"
            labelTitle="E-mail:"
            name="email"
          />
          <PrimaryInput
            type="password"
            placeholder="Senha"
            labelTitle="Senha:"
            name="password"
          />
          <PrimaryButton buttonLabel="Entrar" buttonType="submit" />
        </form>
        <p>
          Não tem uma conta? <a href="/registro">Registre-se</a>
        </p>
      </div>
    </div>
  );
}
