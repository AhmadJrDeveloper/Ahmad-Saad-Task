import React from "react";
import "./Videos.css";

const videoData = [
  {
    title: "Barbell Squats",
    src: "https://www.youtube.com/embed/VZ90qWlfQUE?si=29IA1Z9BlpN9_h5N"
  },
  {
    title: "Kettlebell Pushup",
    src: "https://www.youtube.com/embed/vsCHhOrf6y4?si=Mq6FIumh37pCbUXh"
  },
  {
    title: "Boxing",
    src: "https://www.youtube.com/embed/7EHSN5T-ZQE?si=E-npnblhNs3GQ6cT"
  }
];

function Videos() {
  return (
    <div className="Videos-Container">
      {videoData.map((video, index) => (
        <div key={index}>
          <p className="Videos-Header">{video.title}</p>
          <div className="Videos-Links">
            <iframe
              src={video.src}
              title={`YouTube video player - ${video.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videos;
