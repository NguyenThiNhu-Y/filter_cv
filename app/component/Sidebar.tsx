import { FaFolder, FaSearch } from "react-icons/fa";

interface SidebarProps {
  setView: (view: "main" | "stats") => void;
  view: "main" | "stats" | "detail";
}

const Sidebar: React.FC<SidebarProps> = ({ setView, view }) => {
  return (
    <div className="w-[5%] bg-gray-100 p-1 flex flex-col space-y-6 items-center">
      <img src="logo.png" alt="logom" width={60} height={60} />
      <button
        onClick={() => setView("main")}
        className={`flex items-center justify-center w-10 h-10 rounded-[20px] border border-blue-300 hover:bg-blue-200 ${
          view === "main" ? "bg-blue-300 text-white" : "text-blue-500"
        }`}
      >
        <FaFolder
          size={15}
          className="text-blue-400 cursor-pointer hover:text-blue-500"
        />
      </button>
      <button
        onClick={() => setView("stats")}
        className={`flex items-center justify-center w-10 h-10 rounded-[20px] border border-blue-300 hover:bg-blue-200 ${
          view === "stats" ? "bg-blue-300 text-white" : "text-blue-500"
        }`}
      >
        <FaSearch
          size={15}
          className="text-blue-400 cursor-pointer hover:text-blue-500"
        />
      </button>
    </div>
  );
};

export default Sidebar;
