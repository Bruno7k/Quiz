import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import UserDTO from "../../models/UserDTO";
import { buscarUsuario } from "../../services/userService";
import logo from "/logo.svg";
import bonequinhoNoPc from "/bonequinho-no-pc.svg";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDTO | null>(null); // Estado para armazenar os dados do usuário

  useEffect(() => {
    // Validando se o usuário está logado
    const isLoggedIn = localStorage.getItem("authToken");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    // Recuperando dados do usuário logado
    const fetchUserData = async () => {
      const idUser = Number(localStorage.getItem("idUser"));

      if (idUser) {
        try {
          const userData = await buscarUsuario(Number(idUser));
          setUser(userData);
          console.log("Dados do usuário logado:", user);
        } catch (error) {
          console.error("Erro ao buscar os dados do usuário:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="home-page">
      <div className="buttons-wrapper">
        <button className="botao-perfil">Perfil</button>
        <button className="botao-sair">Sair</button>
      </div>
      <img src={logo} alt="Logo" />
      <img src={bonequinhoNoPc} alt="Bonequinho no PC" />
      <h1 className="title">Bem-vindo, {user?.nome}! Bora jogar?</h1>
      <button className="botao-jogar">Jogar</button>
      <button className="botao-sobre">Sobre</button>
    </div>
  );
}
