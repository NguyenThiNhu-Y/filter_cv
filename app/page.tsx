"use client";

import { useState } from "react";
import FolderList from "./component/FolderList";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";
import DetailedCV from "./component/DetailedCV";
import { CVItem } from "./type/types";
import Statistics from "./component/Statistics";

interface SelectedFolder {
  folder_id: string;
  folder_name: string;
}

export default function Home() {
  const [view, setView] = useState<"main" | "detail" | "stats">("main");
  const [selectedFolder, setSelectedFolder] = useState<SelectedFolder | null>(
    null
  );
  const [selectedCV, setSelectedCV] = useState<CVItem | null>(null);

  const handleSelectCV = (cv: CVItem) => {
    setSelectedCV(cv);
    setView("detail");
  };

  const handleBack = () => {
    setSelectedCV(null);
    setView("main");
  };

  return (
    <div className="flex h-screen">
      <Sidebar setView={setView} view={view} />
      {view === "main" && (
        <>
          <FolderList setSelectedFolder={setSelectedFolder} />
          <MainContent
            selectedFolder={selectedFolder}
            onSelectCV={handleSelectCV}
          />
        </>
      )}
      {view === "detail" && <DetailedCV cv={selectedCV!} onBack={handleBack} />}
      {view === "stats" && <Statistics />}
    </div>
  );
}
