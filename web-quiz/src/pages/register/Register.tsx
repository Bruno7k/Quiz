import "./Register.scss";
import LoginRegisterLogoSide from "../../components/LoginRegisterLogoSide/LoginRegisterLogoSide";
import PrimaryInput from "../../components/Inputs/PrimaryInput/PrimaryInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import UserDTO from "../../models/UserDTO";
import { registerUser } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullName = e.currentTarget.fullName.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const permission = "USER";

    const user = new UserDTO(fullName, email, password, permission);

    try {
      // chamando o metodo do serviço de autenticação
      const response = await registerUser(user);

      //salvando o token e o id do usuário no localStorage
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("idUser", String(response.usuario.id));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-page">
      <LoginRegisterLogoSide />

      <div className="register-area">
        <h1>Crie sua conta!</h1>
        <form onSubmit={handleRegister}>
          <PrimaryInput
            labelTitle="Nome Completo:"
            type="text"
            placeholder="Digite seu nome completo"
            name="fullName"
          />
          <PrimaryInput
            labelTitle="E-mail:"
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
          />
          <PrimaryInput
            labelTitle="Senha:"
            type="password"
            placeholder="Digite sua senha"
            name="password"
          />
          <PrimaryButton buttonLabel="Cadastrar" />
        </form>
        <p>
          Já tem uma conta? <a href="/login">Fazer Login</a>
        </p>
      </div>
    </div>
  );
}
