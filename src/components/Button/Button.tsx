import styles from "./Button.module.scss";

interface ButtonProps {
  handleClick: () => void;
  children: string;
  color?: string;
  active?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  handleClick,
  children,
  color,
  active = false,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.btn} ${color ? styles[color] : ""}`}
      disabled={active}>
      {children}
    </button>
  );
};

export default Button;
