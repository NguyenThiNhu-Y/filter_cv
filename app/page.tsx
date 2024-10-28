"use client";

import { useState } from "react";
import FolderList from "./component/FolderList";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import DetailedCV from "./component/DetailedCV";
import { CVItem } from "./type/types";

export default function Home() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedCV, setSelectedCV] = useState<CVItem | null>(null);

  const handleSelectCV = (cv: CVItem) => setSelectedCV(cv);
  const handleBack = () => setSelectedCV(null);

  return (
    <div className="flex h-screen">
      <Sidebar />
      {!selectedCV ? (
        <>
          <FolderList setSelectedFolder={setSelectedFolder} />
          <MainContent
            selectedFolder={selectedFolder}
            onSelectCV={handleSelectCV}
          />
        </>
      ) : (
        <DetailedCV cv={selectedCV} onBack={handleBack} />
      )}
    </div>
  );
}
