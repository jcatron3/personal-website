import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav id="navigation" className={styles.nav}>
      <div className={styles.nav__separator}></div>
      <ul id="menu" className={styles.nav__list}>
        <li className={styles.nav__listItem}>
          <Link href="/projects">
            <a className={styles.nav__link}>Projects</a>
          </Link>
        </li>
        <li className={styles.nav__listItem}>
          <Link href="/contact">
            <a className={styles.nav__link}>Contact</a>
          </Link>
        </li>
      </ul>
      <div className={styles.nav__separator}></div>
    </nav>
  );
}