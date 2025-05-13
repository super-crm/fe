import { API_PATHS } from '../constants/api.paths';
import type { CreateRepositoryDto, Repository } from '../types/repositories.types';
import { apiService } from './api.service';

class RepositoriesService {
  async getAll() {
    return apiService.get<Repository[]>(API_PATHS.repositories.getAll);
  }

  async getOne(id: string) {
    return apiService.get<Repository>(API_PATHS.repositories.getOne(id));
  }

  async create(data: CreateRepositoryDto) {
    return apiService.post<Repository>(API_PATHS.repositories.post, data);
  }

  async update(id: string) {
    return apiService.patch<Repository>(API_PATHS.repositories.patch(id));
  }

  async delete(id: string) {
    return apiService.delete(API_PATHS.repositories.delete(id));
  }
}

export const repositoriesService = new RepositoriesService();
