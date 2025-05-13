import { API_PATHS } from '../constants/api.paths';
import type { LoginDto, RegisterDto } from '../types/auth.types';
import type { User } from '../types/user.types';
import { apiService } from './api.service';

class AuthService {
  async login(loginDto: LoginDto) {
    return apiService.post<User>(API_PATHS.auth.login, loginDto);
  }

  async logout() {
    return apiService.post(API_PATHS.auth.logout);
  }

  async refresh() {
    return apiService.post(API_PATHS.auth.refresh);
  }

  async register(registerDto: RegisterDto) {
    return apiService.post<User>(API_PATHS.auth.register, registerDto);
  }
}

export const authService = new AuthService();
