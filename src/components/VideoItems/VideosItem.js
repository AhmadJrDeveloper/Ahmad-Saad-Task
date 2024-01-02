import React from "react";
import './VideoItem.css';

function VideoItem({ title, src }) {
  return (
    <div>
      <p className="Videos-Header">{title}</p>
      <div className="Videos-Links">
        <iframe
          src={src}
          title={`YouTube video player - ${title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoItem;
