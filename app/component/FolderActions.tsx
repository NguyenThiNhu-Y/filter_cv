import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import UpdateFolderDialog from "./UpdateFolderDialog";

interface FolderActionsProps {
  folderName: string;
  folderId: string;
  onClose: () => void;
  onUpdate: (folderId: string, newName: string) => void;
}

const FolderActions: React.FC<FolderActionsProps> = ({
  folderName,
  folderId,
  onClose,
  onUpdate,
}) => {
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

  const handleOpenUpdateDialog = () => {
    setIsUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setIsUpdateDialogOpen(false);
    onClose(); // Close the action menu as well
  };

  return (
    <>
      <div className="absolute bottom-[-65px] right-[-135px] bg-white border rounded-md shadow-md p-2 z-10 text-sm">
        <button
          className="flex items-center mb-2 text-gray-600"
          onClick={handleOpenUpdateDialog}
        >
          <MdEdit className="mr-1" /> Đổi Tên Thư Mục
        </button>
        <button className="flex items-center text-red-500">
          <MdDelete className="mr-1" /> Xóa Thư Mục
        </button>
      </div>
      <UpdateFolderDialog
        isOpen={isUpdateDialogOpen}
        onClose={handleCloseUpdateDialog}
        initialFolderName={folderName}
        folderId={folderId}
        onUpdate={onUpdate} // Pass the onUpdate function here
      />
    </>
  );
};

export default FolderActions;
