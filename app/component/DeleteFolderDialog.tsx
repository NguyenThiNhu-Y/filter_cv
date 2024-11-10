import React, { useState } from "react";

interface DeleteFolderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (folderId: string) => void;
  folderName: string;
  folderId: string;
}

const DeleteFolderDialog: React.FC<DeleteFolderDialogProps> = ({
  isOpen,
  onClose,
  onDelete,
  folderName,
  folderId,
}) => {
  const [isDeleting, setIsDeleting] = useState(false); // State to track the delete operation

  if (!isOpen) return null;

  const handleDelete = async () => {
    setIsDeleting(true); // Set deleting state to true while waiting for the API call
    try {
      // Gọi API xóa thư mục
      const response = await fetch(`/api/folders/${folderId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(folderId); // Gọi hàm onDelete từ props để cập nhật giao diện sau khi xóa thành công
        onClose(); // Đóng dialog
      } else {
        // Xử lý khi API trả về lỗi
        alert("Xóa thư mục không thành công. Vui lòng thử lại.");
      }
    } catch (error) {
      // Xử lý lỗi khi gọi API
      console.error("Lỗi khi xóa thư mục:", error);
      alert("Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsDeleting(false); // Cập nhật lại trạng thái khi API gọi xong
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl mb-4">
          Bạn có chắc chắn muốn xóa thư mục {folderName}?
        </h3>
        <div className="flex justify-between">
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
              isDeleting ? "bg-gray-500" : "bg-red-500"
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
