import Head from "next/head";
import Layout from "../components/layout.js";
import { siteTitle } from "./_document.js";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Contact</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Want to say hello?</h2>
        <p>
          You can reach out by email via{" "}
          <a
            className={utilStyles.linkFeature}
            href="mailto:hello@jcatron.com"
          >
            hello@jcatron.com
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
