import styles from "../styles/footer.module.css";
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
        <li className={styles.footer__listItem}>
          <motion.a
            href="/jerry_catron_resume.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            alt="Resume"
          >
            Resume
          </motion.a>
        </li>
        <li className={styles.footer__listItem}>
          <motion.a
            href="https://github.com/jcatron3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            alt="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </motion.a>
        </li>
        <li className={styles.footer__listItem}>
          <motion.a
            href="https://www.linkedin.com/in/jakecatron/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            alt="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </motion.a>
        </li>
      </ul>
    </footer>
  );
}
