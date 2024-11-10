"use client";

import { MdMoreVert } from "react-icons/md";
import FolderHeader from "./FolderHeader";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { useGetAllFolder } from "../api/folderAPI/folder.hooks";
import { useEffect, useRef, useState } from "react";
import AddFolderDialog from "./AddFolderDialog";
import FolderActions from "./FolderActions";
import React from "react";

interface FolderListProps {
  setSelectedFolder: (folder: {
    folder_name: string;
    folder_id: string;
  }) => void;
}

interface Folder {
  folder_id: string;
  folder_name: string;
  updated_at: string;
}

const FolderList: React.FC<FolderListProps> = ({ setSelectedFolder }) => {
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedFolder, setSelectedFolderState] = useState<string | null>(
    null
  ); // Track selected folder
  const [actionFolder, setActionFolder] = useState<string | null>(null); // Track the folder for actions
  const [showActions, setShowActions] = useState(false);
  const actionRef = useRef<HTMLDivElement>(null); // Reference to FolderActions

  const { data: folders = [], isLoading } = useGetAllFolder({
    user_id: "66f94d7b902134342552db57",
    page: page,
    limit: 20,
    keyword: searchKeyword,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    // Check if we are at the bottom of the container
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleActionClick = (folderName: string) => {
    setActionFolder(folderName);
    setShowActions(true);
  };

  const handleCloseActions = () => {
    setShowActions(false);
    setActionFolder(null);
  };

  // Detect outside click to close FolderActions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target as Node)
      ) {
        handleCloseActions();
      }
    };

    // Add event listener to detect clicks outside the action dropdown
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [actionRef]);

  // Fallback or loading state
  if (isLoading || !folders) {
    return (
      <div className="w-[20%] bg-gray-50 p-4 ">
        <div className="sticky top-0 bg-gray-50 z-10">
          <FolderHeader
            onSearch={setSearchKeyword}
            onAdd={() => setIsDialogOpen(true)}
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="spinner"></div> {/* Spinner div */}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[20%] bg-gray-50 p-4" onScroll={handleScroll}>
      <div className="sticky top-0 bg-gray-50 z-10">
        <FolderHeader
          onSearch={setSearchKeyword}
          onAdd={() => setIsDialogOpen(true)}
        />
      </div>
      {/* Folder List */}
      <div>
        {Array.isArray(folders) &&
          folders.map((folder: Folder, index: number) => (
            <React.Fragment key={index}>
              <div
                onClick={() => {
                  setSelectedFolderState(folder.folder_name); // Set selected folder state
                  setSelectedFolder({
                    folder_name: folder.folder_name,
                    folder_id: folder.folder_id,
                  }); // Update the parent component
                }}
                className={`relative flex items-center p-3 cursor-pointer ${
                  selectedFolder === folder.folder_name
                    ? "bg-blue-100"
                    : "bg-white"
                } hover:bg-gray-100`} // Set the container to relative // Conditional styling
              >
                {/* Icon folder */}
                <HiOutlineFolderMinus
                  className="text-blue-300 mr-3 ml-2"
                  size={20}
                />
                <div className="flex-1">
                  <span className="block text-black font-medium text-sm">
                    {folder.folder_name}
                  </span>
                  <p className="text-xs text-gray-500">
                    {folder.updated_at
                      ? new Date(folder.updated_at).toLocaleDateString()
                      : ""}
                  </p>
                </div>
                <MdMoreVert
                  className="text-gray-500 cursor-pointer"
                  size={20}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the folder click event
                    handleActionClick(folder.folder_name); // Open actions
                  }}
                />
                {showActions && actionFolder === folder.folder_name && (
                  <div ref={actionRef}>
                    <FolderActions
                      folderName={actionFolder}
                      folderId={folder.folder_id}
                      onClose={handleCloseActions}
                      onUpdate={(newName) => {
                        setSelectedFolder({
                          folder_name: newName,
                          folder_id: folder.folder_id,
                        });
                      }}
                    />
                  </div>
                )}
              </div>
              {/* Divider line between items */}
              {index < folders.length - 1 && (
                <div className="bg-gray-200 h-[1px] w-full"></div>
              )}
            </React.Fragment>
          ))}
        {/* Show loading spinner when fetching more data */}
        {isLoading && (
          <div className="flex items-center justify-center my-4">
            <div className="spinner"></div> {/* Spinner for loading more */}
          </div>
        )}
      </div>

      <AddFolderDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default FolderList;
