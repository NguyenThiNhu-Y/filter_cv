import React, { useState } from "react";
import { useUpdateFolder } from "../api/folderAPI/folder.hooks";
import { useQueryClient } from "@tanstack/react-query";

interface UpdateFolderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialFolderName: string;
  folderId: string;
  onUpdate: (folderId: string, newName: string) => void;
}

const UpdateFolderDialog: React.FC<UpdateFolderDialogProps> = ({
  isOpen,
  onClose,
  initialFolderName,
  folderId,
  onUpdate,
}) => {
  const queryClient = useQueryClient();
  const [folderName, setFolderName] = useState(initialFolderName);

  // Use the custom hook
  const { mutate: updateFolderMutation, isLoading } = useUpdateFolder();

  const handleUpdate = () => {
    if (folderName.trim()) {
      // Call the updateFolderMutation with folderId and newName
      updateFolderMutation(
        { folder_id: folderId, folder_name: folderName },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["listFolder"],
            });
            // Trigger onUpdate callback and close the dialog on success
            onUpdate(folderId, folderName);
            onClose();
          },
          onError: (error) => {
            console.error("Failed to update folder:", error);
          },
        }
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">Cập Nhật Tên Thư Mục</h2>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Nhập tên mới cho thư mục"
          className="w-full p-2 border rounded-md mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Hủy Bỏ
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            disabled={isLoading} // Optionally disable the button while loading
          >
            {isLoading ? "Đang lưu..." : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateFolderDialog;
