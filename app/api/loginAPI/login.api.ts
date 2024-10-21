import {LoginRequest, LoginResponse} from './loginAPI.types'
import axios from "../axios";

export const login = async (params: LoginRequest) => {
  const result: LoginResponse = await axios.post("/api/login", params);
  return result;
};