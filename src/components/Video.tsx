import video from "/media/ash/Harder Drive/Code/repos/media/hellYeah.mp4";

const Video = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <video autoPlay>
        <source src={video} typeof="/video/mp4" />
      </video>
    </div>
  );
};

export default Video;
