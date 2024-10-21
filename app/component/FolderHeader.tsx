// FolderHeader.tsx
import { MdAdd } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";

interface FolderHeaderProps {
  onSearch: (keyword: string) => void;
  onAdd: () => void; // New prop for add action
}

const FolderHeader: React.FC<FolderHeaderProps> = ({ onSearch, onAdd }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6 text-xl font-bold">
        <div className="flex items-center">
          <CiFolderOn size={24} className="mr-2" />
          <span>THƯ MỤC</span>
        </div>
        {/* Icon add */}
        <button
          className="flex items-center justify-center w-7 h-7 bg-blue-100 text-blue-500 rounded-[10px] border border-blue-300 hover:bg-blue-200"
          onClick={onAdd} // Call onAdd when clicked
        >
          <MdAdd size={18} />
        </button>
      </div>
      <input
        type="text"
        placeholder="Tìm Kiếm Thư Mục"
        className="mb-4 w-full p-2 border rounded-md text-sm"
        onChange={(e) => onSearch(e.target.value)} // Call onSearch when input changes
      />
    </>
  );
};

export default FolderHeader;
