import { X } from "lucide-react";
import Password from "./Password";
import Video from "./Video";
import Cats from "./CatsGalore";
import Map from "./Map";
import Gadgets from "./Gadgets";
import { useState, useMemo } from "react";

const File = ({ file, closeFile }) => {
  const Icon = file.icon;
  const [isUnlocked, setIsUnlocked] = useState(false);

  const windowConfig = useMemo(() => {
    // Default position
    const base = {
      width: null,
      height: null,
      left: file.x,
      top: file.y,
    };

    if (file.password && !isUnlocked) {
      return {
        width: 400,
        height: 300,
        left: window.innerWidth / 2 - 200,
        top: window.innerHeight / 2 - 150,
      };
    }

    if (file.title === "Map" && isUnlocked) {
      const width = window.innerWidth * 0.5;
      const height = window.innerHeight * 0.7;
      return {
        width,
        height,
        left: (window.innerWidth - width) / 2,
        top: (window.innerHeight - height) / 2,
      };
    }

    if (file.title === "Gadgets") {
      const width = window.innerWidth * 0.3;
      const height = window.innerHeight * 0.8;
      return {
        width,
        height,
        left: (window.innerWidth - width) / 2,
        top: (window.innerHeight - height) / 2,
      };
    }

    if (file.title === "Play Me") {
      const width = window.innerWidth * 0.5;
      const height = window.innerHeight * 0.7;
      return {
        width,
        height,
        left: (window.innerWidth - width) / 2,
        top: (window.innerHeight - height) / 2,
      };
    }

    return base;
  }, [file, isUnlocked]);

  const renderContent = () => {
    if (file.title === "Cats Galore") return <Cats />;

    if (file.password && !isUnlocked)
      return <Password onUnlock={() => setIsUnlocked(true)} />;

    if (file.title === "Map" && isUnlocked)
      return <Map width={windowConfig.width} height={windowConfig.height} />;

    if (file.title === "Play Me")
      return <Video closeFile={closeFile} file={file} width={windowConfig.width} height={windowConfig.height}/>;

    if (file.title === "Gadgets")
      return <Gadgets width={windowConfig.width} height={windowConfig.height} />

    return null;
  };

  // Cats renders full screen, no wrapper
  if (file.title === "Cats Galore") return <Cats />;

  const style = {
    position: "absolute",
    zIndex: 1000,
    left: windowConfig.left,
    top: windowConfig.top,
    width: windowConfig.width ?? "auto",
    height: windowConfig.height ?? "auto",
  };

  return (
    <div
      className="absolute bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300"
      style={style}
    >
      {/* Title bar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Icon size={16} />
          <span className="font-semibold">{file.title}</span>
        </div>
        <button
          onClick={() => closeFile(file.id)}
          className="hover:bg-red-500 p-1 rounded"
        >
          <X size={16} />
        </button>
      </div>

      {/* Body */}
      <div className="flex items-center justify-center w-full h-full bg-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default File;
