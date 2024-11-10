import axios from "../axios";
import {
  CrawlResumeRequest,
  ResumeData,
  SearchResumesPayload,
  UploadResumePayload,
} from "./resume.type";

export async function getResumes(payload: SearchResumesPayload) {
  const rs = await axios.post<ResumeData[]>("/api/resume/search", payload);
  return rs;
}

export async function uploadResume({
  file,
  folder_id,
  onUploadProgress,
}: UploadResumePayload) {
  await axios.post(
    "/api/resume/upload",
    {
      resume: file,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: { folder_id },
      onUploadProgress,
      timeout: 1000 * 60 * 2,
    }
  );
}

export async function crawlResume(body: CrawlResumeRequest) {
  await axios.post("/api/resume/crawl_resume", body);
}
