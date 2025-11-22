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
      id: 1,
      name: "Cats Galore",
      icon: Folder,
      color: "text-yellow-400",
      password: false,
    },
    {
      id: 2,
      name: "Play Me",
      icon: Folder,
      color: "text-blue-400",
      password: false,
      width: 1200,
      height: 800,
    },
    {
      id: 3,
      name: "Map",
      icon: Folder,
      color: "text-green-400",
      password: true,
    },
  ];

  const openFile = (icon) => {
    const width = icon.width ?? 600;
    const height = icon.height ?? 400;

    const x = window.innerWidth / 2 - width / 2;
    const y = window.innerHeight / 2 - height / 2;

    const newFile = {
      id: Date.now(),
      title: icon.name,
      icon: icon.icon,
      x,
      y,
      width,
      height,
      minimized: false,
      password: icon.password,
    };
    setFile([...file, newFile]);
  };

  const closeFile = (id) => {
    setFile(file.filter((w) => w.id !== id));
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 overflow-hidden relative">
      {/* Desktop Icons */}
      <div className="p-8 grid grid-cols-1 gap-6 w-32">
        {desktopIcons.map((icon) => {
          const Icon = icon.icon;
          return (
            <button
              key={icon.id}
              onDoubleClick={() => openFile(icon)}
              className="flex flex-col items-center gap-2 p-3 rounded hover:bg-white/20 transition-colors group"
            >
              <Icon size={48} className={`${icon.color} drop-shadow-lg`} />
              <span className="text-white text-sm font-medium text-center drop-shadow-md">
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
