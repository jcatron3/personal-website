import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";


export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Projects</title>
      </Head>
      <html src="../../public/html/lstm.html" />
    </Layout>
  )
}