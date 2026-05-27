// app/dashboard/page.js
import TopTracks from '../../components/topTracks';
import { getTopTracks } from '../../lib/spotify';

export const revalidate = 86400; // Revalidate this page every 24 hours (daily)

export const metadata = {
  title: 'Dashboard'
};

const MOCK_TRACKS = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    songUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2v2Zc7m",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2738863d50f3d2628c648c96e36"
  },
  {
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    songUrl: "https://open.spotify.com/track/5HCyWlGzb3JOSlphIyUv46",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2734127878405c77f7f08d96e36"
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    songUrl: "https://open.spotify.com/track/3ee8JmjejAPd75v75v75v7",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273bd2a66b37b48c9f08d96e36"
  },
  {
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    songUrl: "https://open.spotify.com/track/2TpxZ7JUBn3uw46SU1Oq1q",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273b63a22a9657b7f71c8c96e36"
  },
  {
    title: "Starboy",
    artist: "The Weeknd, Daft Punk",
    songUrl: "https://open.spotify.com/track/7MXV7SnGQZ422c6Wtn+J/5",
    albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273c7b628c35c75372df12a6e36"
  }
];

async function getTracksData() {
  try {
    const response = await getTopTracks();
    if (response.status === 204 || response.status > 400) {
      return [];
    }

    const { items } = await response.json();
    if (!items) {
      return [];
    }

    return items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      albumImageUrl: track.album.images[0].url,
      title: track.name
    }));
  } catch (error) {
    console.error('Error fetching top tracks on server:', error.message);
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ [Spotify API] Connection failed/timed out. Serving local mock tracks fallback for testing.');
      return MOCK_TRACKS;
    }
    return [];
  }
}

export default async function Dashboard() {
  const tracks = await getTracksData();

  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Dashboard
      </h1>
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is my personal dashboard, built with Next.js Server Components.
          I use this dashboard to track various metrics across platforms like Spotify.
        </p>
      </div>
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Top Tracks
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {"Curious what I'm currently jamming to? Here's my top tracks on Spotify, updated daily."}
      </p>
      <TopTracks tracks={tracks} />
    </div>
  );
}
