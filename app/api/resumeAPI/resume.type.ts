import { AxiosProgressEvent } from "axios";
import { APIError } from "../common.type";
import { UseMutationOptions } from "@tanstack/react-query";

export type SearchOption = {
  value: string;
  required: boolean;
};

export type SearchResumesPayload = {
  folder_id: string;
  // job_title: string;
  // awards: SearchOption[];
  // certificates: SearchOption[];
  // educations: SearchOption[];
  // languages: SearchOption[];
  // skills: SearchOption[];
  page: number;
  limit: number;
};

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

export type UploadResumePayload = {
  file: File;
  folder_id: string;
  onUploadProgress: UploadProgessFn;
};

export type UploadProgessFn = (progessEvt: AxiosProgressEvent) => void;

export type UploadResumeOptions = UseMutationOptions<
  void,
  APIError,
  UploadResumePayload,
  unknown
>;

export type CrawlResumeRequest = {
  user_id: string;
  start_date: string;
  end_date: string;
};