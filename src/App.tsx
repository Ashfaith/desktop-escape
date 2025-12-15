import { useState } from "react";
import { Folder } from "lucide-react";
import File from "./components/File";

const DesktopPC = () => {
  const [file, setFile] = useState([]);

  const desktopIcons = [
    {
      id: 0,
      name: "Cats Galore",
      icon: Folder,
      color: "text-yellow-400",
      password: false,
    },
    {
      id: 1,
      name: "Gadgets",
      icon: Folder,
      color: "text-red-400",
      password: false,
    },
    {
      id: 2,
      name: "Map",
      icon: Folder,
      color: "text-green-400",
      password: true,
    },
    {
      id: 3,
      name: "Play Me",
      icon: Folder,
      color: "text-yellow-400",
      password: false,
    },
  ];

  const openFile = (icon) => {
    const x = window.innerWidth / 2 - icon.width / 2;
    const y = window.innerHeight / 2 - icon.height / 2;

    const newFile = {
      id: Date.now(),
      title: icon.name,
      icon: icon.icon,
      x,
      y,
      minimized: false,
      password: icon.password,
    };
    setFile([...file, newFile]);
  };

  const closeFile = (id) => {
    setFile(file.filter((w) => w.id !== id));
  };

  return (
    <div className="h-screen w-screen bg-[url(/CESA_wallpaper_final.png)] bg-cover bg-no-repeat bg-center from-blue-400 via-blue-500 to-purple-600 overflow-hidden relative">
      {/* Desktop Icons */}
      <div className="flex flex-col items-start h-screen w-screen">
        {desktopIcons.map((icon) => {
          const Icon = icon.icon;
          return (
            <button
              key={icon.id}
              onDoubleClick={() => openFile(icon)}
              className={`flex flex-col items-center gap-2 p-3 w-24 rounded hover:bg-white/20 transition-colors group`}
            >
              <Icon
                size={48}
                fill={icon.id === desktopIcons.length - 1 ? "#fcc800" : "none"}
                className={`${icon.color} drop-shadow-lg`}
              />
              <span
                className={`text-white text-center drop-shadow-md ${
                  icon.id === desktopIcons.length - 1
                    ? "text-lg font-bold"
                    : "text-sm font-medium"
                }`}
              >
                {icon.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Files */}
      {file.map((file) => (
        <File key={file.id} file={file} closeFile={closeFile} />
      ))}
    </div>
  );
};

export default DesktopPC;
