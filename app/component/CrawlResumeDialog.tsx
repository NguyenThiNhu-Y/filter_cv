// DialogCrawl.tsx
import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCrawlResume } from "../api/resumeAPI/resume.hooks";
import { QUERY_KEYS } from "../constants/queryKeys";

interface DialogCrawlProps {
  isOpen: boolean;
  onClose: () => void;
}

const CrawlResumeDialog: React.FC<DialogCrawlProps> = ({ isOpen, onClose }) => {
  const queryClient = useQueryClient();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { mutate: crawlData, isLoading } = useCrawlResume(); // Sử dụng hook crawl data

  const handleCrawl = () => {
    crawlData(
      {
        user_id: "66f94d7b902134342552db57",
        start_date: startDate,
        end_date: endDate,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.SEARCH_RESUME],
          });
          setStartDate("");
          setEndDate("");
          onClose();
        },
        onError: (error) => {
          // Xử lý lỗi nếu cần
          console.error("Lỗi khi crawl dữ liệu:", error);
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl font-bold mb-4">Crawl Dữ Liệu</h2>
        <div className="mb-4">
          <label className="block mb-2">Ngày bắt đầu:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ngày kết thúc:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Hủy Bỏ
          </button>
          <button
            onClick={handleCrawl}
            disabled={isLoading}
            className={`px-4 py-2 ${
              isLoading ? "bg-gray-400" : "bg-blue-500"
            } text-white rounded-md`}
          >
            {isLoading ? "Đang Crawl..." : "Crawl"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrawlResumeDialog;
