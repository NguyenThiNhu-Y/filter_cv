import { useState } from "react";
import { MdFilterList, MdRefresh } from "react-icons/md";

const Filter = () => {
  const [activeTab, setActiveTab] = useState("Kỹ Năng"); // Set default tab to 'Kỹ Năng'

  const renderTabContent = () => {
    switch (activeTab) {
      case "Kỹ Năng":
        return (
          <div>
            <input
              type="text"
              placeholder="Tìm Kiếm Kỹ Năng"
              className="w-full p-2 rounded-lg mb-4 border border-gray-300 text-sm"
            />
            <p className="font-bold mb-2">Danh Sách Kỹ Năng</p>
            <ul>
              <li>Reactjs</li>
              <li>Danh Sách Kỹ Năng</li>
              <li>CSS</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>Java</li>
            </ul>
          </div>
        );
      case "Vị Trí Tuyển Dụng":
        return (
          <div>
            <input
              type="text"
              placeholder="Tìm Kiếm Vị Trí Tuyển Dụng"
              className="w-full p-2 rounded-lg mb-4 border border-gray-300 text-sm"
            />
            <p className="font-bold mb-2">Nội dung Vị Trí Tuyển Dụng</p>
            <ul>
              <li>Frontend</li>
              <li>Backend</li>
              <li>AI</li>
            </ul>
          </div>
        );
      case "Học Vấn":
        return <p>Nội dung Học Vấn</p>;
      default:
        return null;
    }
  };

  return (
    <div className="w-1/4 bg-gray-50 p-4 border-l border-gray-200">
      {/* Header with filter icon and reset icon */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <MdFilterList size={24} />
          <h3 className="text-lg font-bold">Bộ lọc</h3>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MdRefresh size={24} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4 text-xs">
        <button
          className={`${
            activeTab === "Vị Trí Tuyển Dụng"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } px-2 py-2 rounded-full`}
          onClick={() => setActiveTab("Vị Trí Tuyển Dụng")}
        >
          Vị Trí Tuyển Dụng
        </button>
        <button
          className={`${
            activeTab === "Kỹ Năng" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-2 py-2 rounded-full`}
          onClick={() => setActiveTab("Kỹ Năng")}
        >
          Kỹ Năng
        </button>
        <button
          className={`${
            activeTab === "Học Vấn" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-2 py-2 rounded-full`}
          onClick={() => setActiveTab("Học Vấn")}
        >
          Học Vấn
        </button>
      </div>

      {/* Dynamic Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Filter;
