import nu from "./nu-kenzie.svg";
import "./styles.css";
import Button from "../Button";

const Header = ({ handleLogin }) => {
  return (
    <header>
      <img src={nu} alt="#" />
      <Button
        onClick={handleLogin}
        className={"header-button"}
        children={"Início"}
      ></Button>
    </header>
  )
}

export default Header;
