import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    APP_URL: z.string().min(1),
    USER_INFO_GIST_ID: z.string().min(1),
    USER_INFO_GIST_FILENAME: z.string().min(1),
    GOOGLE_SITE_VERIFICATION_ID: z.string().optional(),
  },
  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    USER_INFO_GIST_ID: process.env.USER_INFO_GIST_ID,
    USER_INFO_GIST_FILENAME: process.env.USER_INFO_GIST_FILENAME,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
  },
});
