import logo from "/logo.svg";
import bonequinhoNoPc from "/bonequinho-no-pc.svg";
import "./LoginRegisterLogoSide.scss";

export default function LoginRegisterLogoSide() {
  return (
    <div className="logo-area">
      <img src={logo} alt="Logo" />
      <img src={bonequinhoNoPc} alt="Bonequinho no PC" />
    </div>
  );
}
