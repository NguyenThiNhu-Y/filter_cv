import React, { useState } from "react";
import { useDeleteFolder } from "../api/folderAPI/folder.hooks";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteFolderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  folderName: string;
  folderId: string;
}

const DeleteFolderDialog: React.FC<DeleteFolderDialogProps> = ({
  isOpen,
  onClose,
  folderName,
  folderId,
}) => {
  const [isDeleting, setIsDeleting] = useState(false); // State to track the delete operation
  const { mutate: deleteFolder} = useDeleteFolder();
  const queryClient = useQueryClient();
  
  const handleDelete = () => {
    deleteFolder(folderId, {
      onSuccess: () => {
        // Optional: Handle success feedback (e.g., show a toast notification)
        queryClient.invalidateQueries({
          queryKey: ["listFolder"],
        });
        onClose(); // Close the dialog after deletion
      },
      onError: (error) => {
        // Optional: Handle error feedback (e.g., show a toast notification)
        console.error("Failed to delete folder:", error);
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl mb-6">
          Bạn có chắc chắn muốn xóa thư mục <strong>{folderName}</strong>?
        </h3>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Hủy
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting} // Vô hiệu hóa nút khi đang xóa
            className={`${
              isDeleting ? "bg-gray-500 cursor-not-allowed" : "bg-red-500"
            } text-white px-4 py-2 rounded-md`}
          >
            {isDeleting ? "Đang Xóa..." : "Xóa"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFolderDialog;
