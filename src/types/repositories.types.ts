export interface Repository {
  id: string;
  name: string;
  owner: string;
  url: string;
  stars: number;
  forks: number;
  issues: number;
  dateOfCreation: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateRepositoryDto {
  path: string;
}
