import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navigation from "./navigation";
import Footer from "./footer";

const name = 'Jake Catron'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        {home ? (
          <>
            <div className="header__logo">
              <Link href="/">
                <a aria-label="Jake Catron" className={styles.header__logoText}>
                  <h1 className={`${styles.heading} ${styles.headingHome}`}>
                    Jake
                    <img
                      src="/images/profile.png"
                      className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                      alt="Lake Tahoe - Castle Rock pic"
                    />
                    Catron
                  </h1>
                </a>
              </Link>
            </div>
            <Navigation />
          </>
        ) : (
          <>
            <div className="header__logo">
              <Link href="/">
                <a aria-label="Jake Catron" className={styles.header__logoText}>
                  <h1 className={`${styles.heading} ${styles.headingOther}`}>
                    Jake
                    <img
                      src="/images/profile.png"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt="Lake Tahoe - Castle Rock pic"
                    />
                    Catron
                  </h1>
                </a>
              </Link>
            </div>
            <Navigation />
          </>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
