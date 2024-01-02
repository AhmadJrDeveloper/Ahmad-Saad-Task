import React from "react";
import VideoItem from "../VideoItems/VideosItem";
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
        <VideoItem key={index} title={video.title} src={video.src} />
      ))}
    </div>
  );
}

export default Videos;
