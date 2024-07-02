// components/AlbumCard.tsx
import React from 'react';

interface AlbumCardProps {
  album: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  album: { albumId, id, title, url, thumbnailUrl }
}) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <img
          className="w-full h-48 object-cover"
          src={thumbnailUrl}
          alt={title}
        />
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">Album ID: {albumId}</p>
          <p className="text-gray-700 text-base">ID: {id}</p>
        </div>
        <div className="flex items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-800"
          >
            View Full Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
