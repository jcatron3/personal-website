import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Jake Catron'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>

      <header className={styles.header}>
        {home ? (
          <>
            <div className="header__logo">
              <Link href="/" aria-label="Jake Catron" className={styles.header__logoText}>
                <h1 className={`${styles.heading} ${styles.headingHome}`}>
                  Jake
                  <img
                    src="/profile.jpg"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt="Lake Tahoe - Castle Rock pic"
                  />
                  Catron
                </h1>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="header__logo">
              <Link href="/" aria-label="Jake Catron" className={styles.header__logoText}>
                <h1 className={`${styles.heading} ${styles.headingOther}`}>
                  Jake
                  <img
                    src="/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt="Lake Tahoe - Castle Rock pic"
                  />
                  Catron
                </h1>
              </Link>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}
