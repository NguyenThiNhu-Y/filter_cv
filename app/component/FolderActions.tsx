// FolderActions.tsx
import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

interface FolderActionsProps {
  folderName: string;
  onClose: () => void;
  onUpdate: (newName: string) => void; // Function to update the folder name in the parent component
}

const FolderActions: React.FC<FolderActionsProps> = ({
  folderName,
  onClose,
  onUpdate,
}) => {


  return (
    <div className="absolute bottom-[-65px] right-[-135px] bg-white border rounded-md shadow-md p-2 z-10 text-sm">
      <div>
        <button
          className="flex items-center mb-2 text-gray-600"
        >
          <MdEdit className="mr-1" /> Đổi Tên Thư Mục
        </button>
        <button className="flex items-center text-red-500">
          <MdDelete className="mr-1" /> Xóa Thư Mục
        </button>
      </div>
    </div>
  );
};

export default FolderActions;
