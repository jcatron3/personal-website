import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Jake. I'm a Computer Science & Mathematics student at the University
          of Maryland. I will be graduating in May 2022 and am looking for full-time employment as a software engineer.
        </p>
        <p>
          I made this website to get some experience using Next.js and to show off my projects as I complete them.
          I am interested in all things data, and gaining as much knowledge as I can! Always happy to talk shop or get book reccomendations. See the
          Contact page for more.

          This site and my project(s) are a work in progress, let me know if you encounter any errors.
        </p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
