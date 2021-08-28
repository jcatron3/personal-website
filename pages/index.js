import Head from 'next/head'
import { siteTitle } from "./_document.js"
import { getSortedPostsData } from '../lib/posts'
import SectionAbout from '../components/sectionAbout'

export default function Home({ allPostsData }) {
  return (
    <div className="space-y-14 lg:space-y-24 flex-grow">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <SectionAbout />
      </main>
    </div>
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
