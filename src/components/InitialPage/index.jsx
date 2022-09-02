import Button from "../Button";
import img from "./img.png";
import logo from "./logo.svg";
import "./styles.css";

const InitialPage = ({ handleLogin }) => {
  return (
    <section className="pagina-inicial">
      <div className="textos">
        <img src={logo} alt="#" className="logo" />
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <Button
          children={"Iniciar"}
          className={"inicial-button"}
          onClick={handleLogin}
        />
      </div>
      <div className="imagem">
        <img src={img} alt="#" />
      </div>
    </section>
  )
}

export default InitialPage;
