import styles from "../styles/footer.module.css";
import utilStyles from "../styles/utils.module.css";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__list}>
        <li>
          <motion.a
            href="../public/Jake_Catron_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.a>
        </li>
        <li>
          <motion.a
            href="https://github.com/jcatron3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </motion.a>
        </li>
        <li>
          <motion.a
            href="https://www.linkedin.com/in/jakecatron/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </motion.a>
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