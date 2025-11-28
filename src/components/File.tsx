import { X } from "lucide-react";
import Password from "./Password";
import Video from "./Video";
import Cats from "./CatsGalore";
import Map from "./Map";
import Gadgets from "./Gadgets";
import { useState } from "react";

const File = ({ file, closeFile }) => {
  const Icon = file.icon;
  const [isUnlocked, setIsUnlocked] = useState(false);

  const isMap = file.title === "Map" && isUnlocked;

  const position = isMap
    ? {
      left: window.innerWidth / 2 - 600,
      top: window.innerHeight / 2 - 450,
      zIndex: 1000,
    }
    : file.password
    ? {
      left: window.innerWidth / 2 - 200,
      top: window.innerHeight / 2 - 150,
      zIndex: 1000,
    }
    : {
      left: file.x,
      top: file.y,
      zIndex: 1000
    }

  const renderContent = () => {
    if (file.title === "Cats Galore") {
      return <Cats />;
    }

    if (file.password && !isUnlocked) {
      return <Password onUnlock={() => setIsUnlocked(true)} />;
    }

    if (file.title === "Map" && isUnlocked) {
      return <Map />;
    }

    if (file.title === "Play Me") {
      return <Video closeFile={closeFile} file={file} />;
    }

    if (file.title === "Gadgets") {
      return <Gadgets />;
    }

    return null;
  };

  // Don't render the window wrapper for Cats Galore
  if (file.title === "Cats Galore") {
    return <Cats />;
  }

  return (
    <div
      className="absolute bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300"
      style={position}
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Icon size={16} />
          <span className="font-semibold">{file.title}</span>
        </div>
        <div className="flex gap-2 file-controls">
          <button
            onClick={() => closeFile(file.id)}
            className="hover:bg-red-500 p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* File body */}
      <div className="flex items-center justify-center bg-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default File;
