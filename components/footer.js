import styles from "./footer.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__list}>
        <li className={styles.footer__listItem}>
          <a
            className={`${utilStyles.linkFeature} ${styles.footer__listLink}`}
            href="https://www.linkedin.com/in/jakecatron"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.footer__listItem}>
          <a
            className={`${utilStyles.linkFeature} ${styles.footer__listLink}`}
            href="https://github.com/jcatron3"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className={styles.footer__copyright}>
        <small>
          Designed and built by Jake Catron - an experiment with{" "}
          <a className={utilStyles.linkFeature} href="https://nextjs.org/">
            Next.JS
          </a>{" "}
          | © {new Date().getFullYear()}
        </small>
      </p>
    </footer>
  );
}