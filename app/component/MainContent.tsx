import { CiFolderOn } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";
import Filter from "./Filter";
import { CVItem } from "../type/types";
import { useGetResume, useUploadResume } from "../api/resumeAPI/resume.hooks";
import { useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKeys";
import Image from 'next/image';
import CrawlResumeDialog from "./CrawlResumeDialog";

interface MainContentProps {
  selectedFolder: {
    folder_name: string;
    folder_id: string;
  } | null;
  onSelectCV: (cv: CVItem) => void;
}

export type ResumeData = {
  resume_id: string;
  folder_id: string;
  full_name: string;
  job_title: string;
  resume_thumbnail_base64: string;
  email: string;
  phone_number: string;
  skills: [];
  create_at: string;
  updated_at: string;
};

const MainContent: React.FC<MainContentProps> = ({
  selectedFolder,
  onSelectCV,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { data: resumes = [] } = useGetResume({
    folder_id: selectedFolder?.folder_id || "",
    // job_title: "",
    // awards: [],
    // certificates: [],
    // educations: [],
    // languages: [],
    // skills: [],
    page: 1,
    limit: 20,
  });
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { mutate: uploadResume } = useUploadResume({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SEARCH_RESUME],
      }); // Invalidate query to refresh resume list
    },
  });

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && selectedFolder) {
      uploadResume({
        file,
        folder_id: selectedFolder.folder_id,
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(`Upload Progress: ${progress}%`);
          } else {
            console.log(`Uploaded ${progressEvent.loaded} bytes`);
          }
        },
      });
    }
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  
  if (!selectedFolder) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center bg-blue-50 h-screen">
        <Image
          src="/empty.png" // Placeholder for empty image
          alt="Illustration"
          width={200}
          height={200}
        />
        <p className="mt-4 text-lg text-center">
          Bạn hãy chọn 1 thư mục nào đó!
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-[75%]">
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex">
            <CiFolderOn size={24} className="mr-2" />
            <h6 className="text-xl font-bold">{selectedFolder.folder_name}</h6>
          </div>
          <div className="flex">
            <button
              onClick={handleDialogOpen}
              className="text-sm bg-blue-500 text-white font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out mr-2 flex items-center"
            >
              Crawl CV
              <MdFileDownload className="ml-2" />
            </button>
            <CrawlResumeDialog
              isOpen={isDialogOpen}
              onClose={handleDialogClose}
            />
            <button
              onClick={handleUploadClick}
              className="text-sm bg-blue-500 text-white font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out flex items-center"
            >
              Tải Lên
              <MdFileUpload className="ml-2" />
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        {Array.isArray(resumes) && resumes.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-center">
            <Image
              src="/empty.png" // Placeholder for empty image
              alt="Illustration"
              width={200}
              height={200}
            />
            <p className="mt-4 text-lg text-center">Chưa có CV nào!</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4 overflow-y-auto custom-scrollbar">
            {Array.isArray(resumes) &&
              resumes.map((resume: ResumeData, index: number) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-2 bg-white border rounded-lg shadow-md h-auto"
                  onClick={() => onSelectCV(resume)}
                >
                  <Image
                    src={`data:image/jpeg;base64,${resume.resume_thumbnail_base64}`}
                    alt={resume.full_name}
                    className="h-auto rounded-md mb-4"
                    width={160}
                    height={200}
                  />
                  <h3 className="text-md font-semibold">{resume.full_name}</h3>
                  <p className="text-md text-gray-500">{resume.job_title}</p>
                </div>
              ))}
          </div>
        )}
      </div>
      <Filter />
    </div>
  );
};

export default MainContent;
