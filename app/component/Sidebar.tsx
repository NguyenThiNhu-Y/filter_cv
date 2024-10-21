import { FaFolder, FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[5%] bg-gray-100 p-1 flex flex-col space-y-6 items-center">
      <img src="logo.png" alt="logom" width={60} height={60} />
      <button className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-500 rounded-[20px] border border-blue-300 hover:bg-blue-200">
        <FaFolder
          size={15}
          className="text-blue-400 cursor-pointer hover:text-blue-500"
        />
      </button>
      <button className="flex items-center justify-center w-10 h-10 rounded-[20px] border border-blue-300 hover:bg-blue-200">
        <FaSearch
          size={15}
          className="text-blue-400 cursor-pointer hover:text-blue-500"
        />
      </button>
    </div>
  );
};

export default Sidebar;
