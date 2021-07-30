import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navigation from "./navigation";
import Footer from "./footer";

const name = 'Jake Catron'
export const siteTitle = 'Personal Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jake Catron's personal development website."
        />
        <meta name="title" content={siteTitle} />
      </Head>
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
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
