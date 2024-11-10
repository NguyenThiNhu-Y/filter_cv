import { createFolder, deleteFolder, getAllFolder, updateFolder } from "./folder.api";
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

export function useUpdateFolder() {
  return useMutation({
    mutationKey: ["updateFolder"],
    mutationFn: updateFolder,
  });
}

export function useDeleteFolder() {
  return useMutation({
    mutationKey: ["deleteFolder"],
    mutationFn: deleteFolder,
  });
}

