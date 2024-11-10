import { CreateFolderRequest, GetAllFolderRequest, GetAllFolderResponse, UpdateFolderRequest } from "./folderAPI.types";
import axios from "../axios";

export const getAllFolder = async (params: GetAllFolderRequest) => {
  const result: GetAllFolderResponse = await axios.get("/api/folder/get_all", {
    params,
  });
  return result;
};

export const createFolder = async (body: CreateFolderRequest) => {
  const result: GetAllFolderResponse = await axios.post(
    "/api/folder/create",
    body
  );
  return result;
};

export const updateFolder = async (body: UpdateFolderRequest) => {
  const result: GetAllFolderResponse = await axios.put(
    "/api/folder/update",
    body
  );
  return result;
};

export async function deleteFolder(folder_id: string) {
  await axios.delete("/api/folder/delete/" + folder_id);
}