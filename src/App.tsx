import { useEffect, useState } from "react";
import { Folder } from "lucide-react";
import Window from "./components/window";

const DesktopPC = () => {
  const [windows, setWindows] = useState([]);
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
    },
    {
      id: 3,
      name: "Map",
      icon: Folder,
      color: "text-green-400",
      password: true,
    },
  ];

  const openWindow = (icon) => {
    const newWindow = {
      id: Date.now(),
      title: icon.name,
      icon: icon.icon,
      x: Math.random() * 200 + 100,
      y: Math.random() * 100 + 50,
      width: 600,
      height: 400,
      minimized: false,
      password: icon.password,
    };
    setWindows([...windows, newWindow]);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  const restoreWindow = (id) => {
    setWindows(
      windows.map((w) => (w.id === id ? { ...w, minimized: false } : w))
    );
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
              onDoubleClick={() => openWindow(icon)}
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

      {/* Windows */}
      {windows.map((window) => (
        <Window key={window.id} window={window} closeWindow={closeWindow} />
      ))}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm h-12 flex items-center justify-between px-4 shadow-lg">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded font-semibold">
          Start
        </button>

        <div className="flex gap-2">
          {windows
            .filter((w) => w.minimized)
            .map((window) => {
              const Icon = window.icon;
              return (
                <button
                  key={window.id}
                  onClick={() => restoreWindow(window.id)}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded flex items-center gap-2"
                >
                  <Icon size={16} />
                  <span className="text-sm">{window.title}</span>
                </button>
              );
            })}
        </div>

        <div className="text-white text-sm font-medium">{time}</div>
      </div>
    </div>
  );
};

export default DesktopPC;
