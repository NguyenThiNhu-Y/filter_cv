// AddFolderDialog.tsx
import React, { useState } from "react";
import { useCreateFolder } from "../api/folderAPI/folder.hooks";
import { useQueryClient } from "@tanstack/react-query";

interface AddFolderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddFolderDialog: React.FC<AddFolderDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const queryClient = useQueryClient();
  const [folderName, setFolderName] = useState("");
  const { mutate: createFolder, isLoading } = useCreateFolder(); // Use the create folder hook

  const handleSave = () => {
    if (folderName.trim()) {
      createFolder(
        { folder_name: folderName, user_id: "66f94d7b902134342552db57" },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["listFolder"],
            });
            // Optionally reset the folder name and close the dialog after successful creation
            setFolderName("");
            onClose();
          },
          onError: (error) => {
            // Handle error if needed
            console.error("Error creating folder:", error);
          },
        }
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">Tạo Mới Thư Mục</h2>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Nhập tên thư mục"
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
            onClick={handleSave}
            disabled={isLoading} // Disable the button while loading
            className={`px-4 py-2 ${
              isLoading ? "bg-gray-400" : "bg-blue-500"
            } text-white rounded-md`}
          >
            {isLoading ? "Đang Lưu..." : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFolderDialog;
