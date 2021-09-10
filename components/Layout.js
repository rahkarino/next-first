import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />

      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};
