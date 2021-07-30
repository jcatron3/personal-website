import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout"
import { projectPath } from "../../lib/projects"


export default function Project() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Projects</title>
      </Head>
      <html src={projectPath} />
    </Layout>
  )
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'lstm' } }
    ],
    fallback: false
  }
}