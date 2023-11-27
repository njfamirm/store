import {resolve} from 'node:path';

import {createLogger} from '@alwatr/logger';

export const logger = createLogger('storage-api');

export const config = {
  nanoServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: process.env.PORT != null ? +process.env.PORT : 9000,
    accessToken: process.env.ACCESS_TOKEN ?? 'YOUR_SECRET_TOKEN',
  },
  storage: {
    path: resolve(process.env.STORAGE_PATH ?? 'db'),
    saveDebounce: process.env.SAVE_DEBOUNCE != null ? +process.env.SAVE_DEBOUNCE : 100,
  },
} as const;

logger.logProperty?.('config', config);