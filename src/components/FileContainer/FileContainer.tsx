import styles from "./FileContainer.module.scss";

interface FileContainerProps {
  children: React.ReactNode;
}

const FileContainer: React.FC<FileContainerProps> = ({children}) => {
  return (
    <div className={styles.container}>
      <>{children}</>
    </div>
  );
};

export default FileContainer;
