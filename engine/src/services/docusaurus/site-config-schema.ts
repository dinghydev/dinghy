import { z } from 'zod'
export const SiteConfigSchema = z.object({
  baseUrl: z.string().default('/'),
  trailingSlash: z.boolean().default(false),
  deploy: z.object({
    s3Url: z.string(),
    s3Region: z.string().default('us-east-1'),
    gzipExtensions: z.string().array().default([
      'js',
      'css',
      'svg',
      'xml',
      'txt',
      'json',
    ]),
    immutablePatterns: z.string().array().default([
      '\\.[a-z0-9]{8,32}\\.\\w{2,5}$',
      '-[a-z0-9]{32}\\.\\w{2,5}$',
    ]),
    cacheControl: z.object({
      mutable: z.string(),
      immutable: z.string(),
    }).default({
      mutable: 'public,max-age=3600,must-revalidate',
      immutable: 'public,max-age=2592000',
    }),
    cleanUpStagingFiles: z.boolean().default(true),
  }).optional(),
  volumes: z.string().array().optional(),
})
