import axios, { AxiosResponse } from "axios";
// import { portfolioData } from "../similarprops";
import { API } from "../../config";
import { ApiResponse } from "../similarprops";
export const getProtfolio = async (): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${API}/details`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPortfolioById = async (id: string): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${API}/details/${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
