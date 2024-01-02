import React from "react";
import VideoItem from "../VideoItems/VideosItem";

const recipeData = [
  {
    title: "Steak",
    src: "https://www.youtube.com/embed/Qnfpbbig-oU?si=GsgnJRV4VouNpkbg"
  },
  {
    title: "Acquacotta",
    src: "https://www.youtube.com/embed/T1jX_yMwRds?si=J77AjUZa-ccStz0h"
  },
  {
    title: "Duck ragu",
    src: "https://www.youtube.com/embed/-X9ccekA5AA?si=M0rZB30hHyck3VXX"
  },
  {
    title: "Jerk chicken salad",
    src: "https://www.youtube.com/embed/PsayY5aM-hE?si=hPNOhFCL0pmBf0xG"
  }
];

function DisplayRecipe() {
  return (
    <div className="Videos-Container">
      {recipeData.map((video, index) => (
        <VideoItem key={index} title={video.title} src={video.src} />
      ))}
    </div>
  );
}

export default DisplayRecipe;
