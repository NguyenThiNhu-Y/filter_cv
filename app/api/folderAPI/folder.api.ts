import { CreateFolderRequest, GetAllFolderRequest, GetAllFolderResponse } from "./folderAPI.types";
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
