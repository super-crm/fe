import { z } from 'zod';
import { translate } from '../../utils/intl';

export const loginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: translate('fields.email.errors.required') })
    .email(),
  password: z
    .string()
    .trim()
    .min(1, { message: translate('fields.password.errors.required') }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
