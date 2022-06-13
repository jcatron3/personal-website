import Image from 'next/image'

export default function Track(track) {
  return (
    <div className="flex flex-row pb-6 space-x-4 items-center border-b border-gray-100 dark:border-gray-800 max-w-3xl w-full ml-2 mt-8">
      <p className="text-xl font-bold text-gray-400 dark:text-gray-600">
        {track.ranking}
      </p>
      <div >
        <Image
          src={track.albumImageUrl}
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
        >
          {track.artist}
        </p>
      </div>
    </div>
  );
}