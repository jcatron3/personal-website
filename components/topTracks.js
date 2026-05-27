import Track from './track';

export default function TopTracks({ tracks }) {
  if (!tracks || tracks.length === 0) {
    return <p className="text-gray-500">No tracks found.</p>;
  }
  return tracks.map((track, index) => (
    <Track key={track.songUrl} ranking={index + 1} {...track} />
  ));
}
