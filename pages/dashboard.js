import Head from "next/head";
import Layout, { siteTitle } from "../components/layout.js";
import TopTracks from "../components/topTracks.js";

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Dashboard</title>
      </Head>
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Top Tracks
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Curious what I'm currently jamming to? Here's my top tracks on Spotify
        updated daily.
      </p>
      <TopTracks />
    </Layout>
  )
}