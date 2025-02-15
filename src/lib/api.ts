import axios from "axios";
import { Objetivo } from "./definitions";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function getAllOKRs(): Promise<Objetivo[]> {
  const response = await axiosInstance.get("okrs");

  return response.data;
}

export async function createOKR(
  data: Pick<Objetivo, "name">
): Promise<Objetivo> {
  const response = await axiosInstance.post("okrs", data);
  return response.data;
}
