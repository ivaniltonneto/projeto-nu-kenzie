import "./styles.css";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      children={children}
      className={className}
    ></button>
  );
};

export default Button;
