import styles from "../styles/navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav id="navigation" className={styles.nav}>
      <div className={styles.nav__separator}>_____________________</div>
      <ul id="menu" className={styles.nav__list}>
        <li className={styles.nav__listItem}>
          <Link href="/dashboard">
            <a className={styles.nav__link}>Dashboard</a>
          </Link>
        </li>
        <li className={styles.nav__listItem}>
          <Link href="/contact">
            <a className={styles.nav__link}>Contact</a>
          </Link>
        </li>
      </ul>
      <div className={styles.nav__separator}>_____________________</div>
    </nav>
  );
}
