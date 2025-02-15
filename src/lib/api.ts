import { Delivery, Objetivo, Results } from "./definitions";

import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function getAllOKRs(): Promise<Objetivo[]> {
  const response = await axiosInstance.get("okrs");

  return response.data;
}

export async function createOKR(data: Pick<Objetivo, "name">): Promise<Objetivo> {
  const response = await axiosInstance.post("okrs", data);
  return response.data;
}

export async function getResultsKeysByOKRId(id: number): Promise<Results[]> {
  const response = await axiosInstance.get(`okrs/${id}/resultKeys`);
  return response.data;
}

export async function createResultsKey(id: number, data: Pick<Results, "name" | "deliveries">): Promise<Delivery> {
  const response = await axiosInstance.post(`okrs/${id}/resultKeys`, data);
  return response.data;
}

export async function updateResultsKey(result: Results, data: Pick<Results, "name" | "deliveries">): Promise<Delivery> {
  const response = await axiosInstance.put(`okrs/${result.okrId}/resultKeys/${result.id}`, data);
  return response.data;
}
