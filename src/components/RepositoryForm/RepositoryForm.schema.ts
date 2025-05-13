import { z } from 'zod';
import { translate } from '../../utils/intl';

export const repositoryFormSchema = z.object({
  path: z
    .string()
    .trim()
    .min(1, { message: translate('fields.path.errors.required') }),
});

export type RepositoryFormSchema = z.infer<typeof repositoryFormSchema>;
