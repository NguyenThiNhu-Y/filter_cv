import { useMutation, useQuery } from "@tanstack/react-query";
import { SearchResumesPayload, UploadResumeOptions, UploadResumePayload } from "./resume.type";
import { crawlResume, getResumes, uploadResume } from "./resume.api";
import { QUERY_KEYS } from "@/app/constants/queryKeys";
import { APIError } from "../common.type";
import { MUTATION_KEYS } from "@/app/constants/mutationKeys";

export function useGetResume(payload: SearchResumesPayload) {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH_RESUME, payload],
    queryFn: () => getResumes(payload),
  });
}

export function useUploadResume(options?: UploadResumeOptions) {
  return useMutation<void, APIError, UploadResumePayload>({
    ...options,
    mutationKey: [MUTATION_KEYS.UPLOAD_RESUME],
    mutationFn: uploadResume,
  });
}

export function useCrawlResume() {
  return useMutation({
    mutationKey: ["crawlResume"],
    mutationFn: crawlResume,
  });
}