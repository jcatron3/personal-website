import Head from "next/head";
import Layout from "../components/layout.js";
import { siteTitle } from "./_document.js";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <Head>
        <title>{siteTitle}: Contact</title>
      </Head>
        <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Want to say hello?
        </h2>
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          You can reach out by email via{" "}
          <a
            className={utilStyles.linkFeature}
            href="mailto:hello@jcatron.com"
          >
            hello@jcatron.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
