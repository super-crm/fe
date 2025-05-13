import { z } from 'zod';
import { translate } from '../../utils/intl';

export const registerFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: translate('fields.email.errors.required') })
      .email(),
    password: z
      .string()
      .trim()
      .min(1, { message: translate('fields.password.errors.required') }),
    passwordConfirmation: z
      .string()
      .trim()
      .min(1, {
        message: translate('fields.passwordConfirmation.errors.required'),
      }),
    firstName: z
      .string()
      .trim()
      .min(1, { message: translate('fields.firstName.errors.required') }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: translate('fields.lastName.errors.required') }),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: translate('fields.passwordConfirmation.errors.notMatch'),
    path: ['passwordConfirmation'],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
