import React from "react";

function Movie() {
  return (
    <div class="w-full flex justify-center items-center h-[100vh]">
      <iframe
        width="80%"
        height="80%"
        src="https://www.youtube.com/embed/yXmbbdaYyGw?start=2"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Movie;
