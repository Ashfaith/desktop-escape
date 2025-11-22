// File.tsx
import { X } from "lucide-react";
import Password from "./Password";
import Video from "./Video";
import Cats from "./CatsGalore";

const File = ({ file, closeFile }) => {
  const Icon = file.icon;

  return (
    <>
      {file.title === "Cats Galore" ? (
        <Cats />
      ) : (
        <div
          className="absolute bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300 flex flex-col"
          style={{
            left: file.x,
            top: file.y,
            width: file.width,
            height: file.height,
            zIndex: 1000,
          }}
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
          <div className="flex-1 flex items-center justify-center p-6 bg-white">
            {file.password && (
              <div className="flex flex-col items-center">
                <Password />
              </div>
            )}
            {file.title === "Play Me" && (
              <div className="flex flex-col items-center">
                <Video closeFile={closeFile} file={file} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default File;
