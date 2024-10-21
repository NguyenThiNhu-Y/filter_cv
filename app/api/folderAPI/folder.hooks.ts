import { createFolder, getAllFolder } from "./folder.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetAllFolderRequest } from "./folderAPI.types";

export const useGetAllFolder = (payload: GetAllFolderRequest) => {
  return useQuery({
    queryKey: ["listFolder", payload],
    queryFn: () => getAllFolder(payload),
  });
};

export function useCreateFolder() {
  return useMutation({
    mutationKey: ["createFolder"],
    mutationFn: createFolder,
  });
}

