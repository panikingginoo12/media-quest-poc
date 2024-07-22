import React from 'react';

import Tile from '@/components/tile';

const SectionPage = () => {
  const TILES = [
    {
      img: {
        src: '/assets/images/dummy/image1.png',
        alt: 'dummy image',
      },
      description:
        "Jordan Clarkson or Justin Brownlee for Gilas? TNT's Rondae Hollis-Jefferson weighs in",
      leagues: ['gilas'],
      types: ['news'],
      date: 'July 12, 2024',
      author: 'batman panikingginoo',
    },
    {
      img: {
        src: '/assets/images/dummy/image1.png',
        alt: 'dummy image',
      },
      description:
        "Jordan Clarkson or Justin Brownlee for Gilas? TNT's Rondae Hollis-Jefferson weighs in",
      leagues: ['gilas'],
      types: ['news'],
      date: 'July 12, 2024',
      author: 'batman panikingginoo',
    },
    {
      img: {
        src: '/assets/images/dummy/image1.png',
        alt: 'dummy image',
      },
      description:
        "Jordan Clarkson or Justin Brownlee for Gilas? TNT's Rondae Hollis-Jefferson weighs in",
      leagues: ['gilas'],
      types: ['news'],
      date: 'July 12, 2024',
      author: 'batman panikingginoo',
    },
    {
      img: {
        src: '/assets/images/dummy/image1.png',
        alt: 'dummy image',
      },
      description:
        "Jordan Clarkson or Justin Brownlee for Gilas? TNT's Rondae Hollis-Jefferson weighs in",
      leagues: ['gilas'],
      types: ['news'],
      date: 'July 12, 2024',
      author: 'batman panikingginoo',
    },
  ];

  return (
    <div className="grid-cols-auto-fill-minmax grid gap-4">
      {TILES.map((tile) => (
        <Tile
          key={tile.description}
          img={tile.img}
          description={tile.description}
          leagues={tile.leagues}
          types={tile.types}
          date={tile.date}
          author={tile.author}
        />
      ))}
    </div>
  );
};

export default SectionPage;
