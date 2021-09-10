import styles from "../styles/Nav.module.css";
import Link from "next/link";
import layoutStyles from "../styles/Layout.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={layoutStyles.container}>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
