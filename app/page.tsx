"use client";

import { useState } from "react";
import FolderList from "./component/FolderList";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";

export default function Home() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar với các icon */}
      <Sidebar />

      {/* Danh sách thư mục */}
      <FolderList setSelectedFolder={setSelectedFolder} />

      {/* Nội dung chính */}
      <MainContent selectedFolder={selectedFolder} />
      
    </div>
  );
}
