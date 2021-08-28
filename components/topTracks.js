import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import Track from './track';

export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }
  console.log(data)
  return data.tracks.map((track, index) => (
    <Track ranking={index + 1} {...track} />
  ));
}
