import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Meta from "./Meta";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};
