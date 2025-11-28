import video from "/media/ash/Harder Drive/Code/repos/media/hellYeah.mp4";
import { useEffect } from "react";

const Video = ({ file, closeFile }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeFile(file.id);
    }, 22000);

    return () => clearTimeout(timer);
  }, [file.id, closeFile]);

  return (
    <div className="flex flex-col items-center justify-center">
      <video autoPlay className="max-w-full max-h-full">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
