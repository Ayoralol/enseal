import styles from "./Button.module.scss";

interface ButtonProps {
  handleClick: () => void;
  children: string;
  color?: string;
}
const Button: React.FC<ButtonProps> = ({handleClick, children, color}) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.btn} ${color ? styles[color] : ""}`}>
      {children}
    </button>
  );
};

export default Button;
