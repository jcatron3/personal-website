import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";


export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Projects</title>
      </Head>
      <html src="../../public/html/lstm.html" />
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'lstm' } }
    ],
    fallback: false
  }
}