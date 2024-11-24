import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import UpdateFolderDialog from "./UpdateFolderDialog";
import DeleteFolderDialog from "./DeleteFolderDialog";

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
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleOpenUpdateDialog = () => {
    setIsUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setIsUpdateDialogOpen(false);
    onClose(); // Close the action menu as well
  };

  const handleOpenDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
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
        <button
          className="flex items-center text-red-500"
          onClick={handleOpenDeleteDialog}
        >
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
      <DeleteFolderDialog
        isOpen={isDeleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        folderName={folderName}
        folderId={folderId}
      />
    </>
  );
};

export default FolderActions;
