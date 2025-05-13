import { createIntl, createIntlCache } from 'react-intl';
import english from '../languages/en.json'

import { LOCALES } from '../constants/locales';

const translations = {
  [LOCALES.EN]: english,
};

export const intl = createIntl(
  {
    locale: LOCALES.EN,
    messages: translations[LOCALES.EN],
  },
  createIntlCache(),
);

export const translate = (id: string, values?: Record<string, any>): string =>
  intl.formatMessage({ id }, values) as string;
