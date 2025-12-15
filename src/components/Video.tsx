// import video from "video insert goes here";
import { useEffect } from "react";

const Video = ({ file, closeFile, width, height }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeFile(file.id);
    }, 22000);

    return () => clearTimeout(timer);
  }, [file.id, closeFile]);

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ width, height }}
    >
      {/* <video autoPlay className="max-w-full max-h-full">
        <source src={video} type="video/mp4" />
      </video> */}
      <p>This plays a video in production</p>
    </div>
  );
};

export default Video;
