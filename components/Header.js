import styles from "../styles/Header.module.css";
import layoutStyles from "../styles/Layout.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={layoutStyles.container}>
        <h1 className={styles.title}>
          <span>WebDev</span> News
        </h1>
        <p className={styles.description}>
          Keep up to date with the latest web dev news Keep up to date with the
          latest web dev news Keep up to date with the latest web dev news Keep
          up to date with the latest web dev news Keep up to date with the
          latest web dev news Keep up to date with the latest web dev news Keep
          up to date with the latest web dev news Keep up to date with the
          latest web dev news Keep up to date with the latest web dev news Keep
          up to date with the latest web dev news
        </p>
      </div>
    </div>
  );
};

export default Header;
