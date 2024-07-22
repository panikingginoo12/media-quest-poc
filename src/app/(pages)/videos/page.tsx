import React from 'react';

const VideosPage = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <iframe
        src="https://www.youtube.com/embed/xFAYcnACuZE?si=mG82XSovbOXCA_NX"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://www.dailymotion.com/embed/video/x8x5t1k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideosPage;
