// App.tsx
import { useEffect, useState } from "react";
import { Folder } from "lucide-react";
import File from "./components/File";

const DesktopPC = () => {
  const [file, setFile] = useState([]);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      width: 800,
      height: 1200,
    },
    {
      id: 2,
      name: "Map",
      icon: Folder,
      color: "text-green-400",
      password: true,
      width: -600,
      height: -300,
    },
    {
      id: 3,
      name: "Play Me",
      icon: Folder,
      color: "text-yellow-400",
      password: false,
      width: 1200,
      height: 800,
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
              className={`flex flex-col items-center gap-2 p-3 w-24 rounded hover:bg-white/20 transition-colors group ${
                icon.id === desktopIcons.length - 1
                  ? "mx-auto my-50 text-lg"
                  : ""
              }`}
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

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm h-12 flex items-center justify-between px-4 shadow-lg">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded font-semibold">
          Start
        </button>

        <div className="text-white text-sm font-medium">{time}</div>
      </div>
    </div>
  );
};

export default DesktopPC;
