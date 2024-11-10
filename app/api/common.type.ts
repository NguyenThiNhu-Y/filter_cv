import { API_ERROR_TYPES } from "../constants/enums"

export type APIError<TDATA = null> = {
  data: TDATA
  message: string
  status_code: number
  type: API_ERROR_TYPES
}

export type Pagination<TDATA = object> = {
  totalPages: number
  totalElements: number
  page: number
  size: number
  results: TDATA[]
}

export type PaginationPayload = {
  page: number
  size: number
}
