export interface GetAllFolderRequest {
  user_id: string;
  page: number;
  limit: number;
  keyword: string;
}

export interface FolderInfo {
  folder_id: string;
  folder_name: string;
  user_id: string;
  create_at: string;
  updated_at: string;
}

export interface GetAllFolderResponse {
  data: FolderInfo[];
}

export interface CreateFolderRequest {
  folder_name: string;
  user_id: string;
}

