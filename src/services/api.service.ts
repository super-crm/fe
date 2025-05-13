import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig,
} from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

import { API_PATHS } from '../constants/api.paths';
import { APP_ROUTES } from '../constants/app.routes';
import { logout } from '../store/user.state';

const baseURL = import.meta.env.VITE_BACKEND_REST_BASE_URL;

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL });

    createAuthRefreshInterceptor(
      this.axiosInstance,
      async (failedRequest: AxiosError) => {
        if (
          !failedRequest?.config?.url ||
          !failedRequest?.response?.config?.headers ||
          failedRequest?.config?.url?.includes(APP_ROUTES.home)
        ) {
          throw failedRequest;
        }

        try {
          await this.axiosInstance.post(API_PATHS.auth.refresh, {}, {
            withCredentials: true,
            skipAuthRefresh: true,
          } as AxiosRequestConfig);
        } catch (error) {
          logout();
        }
      }
    );
  }

  async get<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, { withCredentials: true });
  }

  async post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post(url, data, { withCredentials: true });
  }

  async put<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put(url, data, { withCredentials: true });
  }

  async patch<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch(url, data, { withCredentials: true });
  }

  async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete(url, { withCredentials: true });
  }
}

export const apiService = new ApiService();
