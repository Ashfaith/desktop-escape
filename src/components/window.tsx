import { useState } from "react";
import { X } from "lucide-react";
import Password from "./password";

const Window = ({ window, closeWindow }) => {
  const Icon = window.icon;

  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

  if (window.minimized) return null;

  return (
    <div
      className="absolute bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300 flex flex-col"
      style={{
        left: window.x,
        top: window.y,
        width: window.width,
        height: window.height,
        zIndex: 1000,
      }}
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Icon size={16} />
          <span className="font-semibold">{window.title}</span>
        </div>
        <div className="flex gap-2 window-controls">
          <button
            onClick={() => closeWindow(window.id)}
            className="hover:bg-red-500 p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Window body */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        {window.password && !isPasswordCorrect ? (
          <div className="flex flex-col items-center">
            <Password
              setIsPasswordCorrect={setIsPasswordCorrect}
              setIsIncorrect={setIsIncorrect}
            />
            <div className="mt-4 h-8">
              {isIncorrect && (
                <p className="text-red-600 text-l">
                  Incorrect password. Try again.
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">{window.title}</h2>
            <p className="text-red-600 text-4xl font-bold">
              MAP CONTENT GOES HERE!!!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Window;
