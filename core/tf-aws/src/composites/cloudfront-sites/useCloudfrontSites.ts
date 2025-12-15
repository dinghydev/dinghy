import { useRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'

const OriginSchema = z.object({
  name: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  target: z.string().regex(/^(s3|https):\/\//, {
    message: "Unsupported target format, must start with 's3://' or 'https://'",
  }),
  targetProtocol: z.string().optional().transform((
    value: string | undefined,
  ) => value as string),
  targetHost: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  targetPath: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  originAccessIdentity: z.string().optional(),
  customHeaders: z.record(z.string(), z.string()).optional(),
  pathPattern: z.string().default('*'),
  cacheBehavior: z.record(z.string(), z.any()).optional(),
  contentTypes: z.record(z.string(), z.string()).default({}),
  fileCacheControl: z.string().default('max-age=3600, public, must-revalidate'),
})

const CloudfrontSiteSchema = z.object({
  title: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  s3Origin: z.object({
    bucket: z.string(),
    region: z.string().optional(),
    prefix: z.string().optional(),
  }).loose().optional(),
  origins: z.record(z.string(), OriginSchema),
  alternativeNames: z.string().array().optional().transform((
    value: string[] | undefined,
  ) => value as string[]),
  redirectFromNames: z.string().array().optional(),
  redirectToName: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
  zoneNames: z.string().array().optional().transform((
    value: string[] | undefined,
  ) => value as string[]),
  certVersions: z.string().array().default(['1']),
  defaultRootObject: z.string().default('index.html'),
  loggingV1Enabled: z.boolean().default(true),
}).loose()

const CloudfrontSitesSchema = z.record(z.string(), CloudfrontSiteSchema)

export type OriginType = z.output<typeof OriginSchema>
export type CloudfrontSiteType = z.output<typeof CloudfrontSiteSchema>

export function useCloudfrontSites(
  sites?: any,
): Record<string, CloudfrontSiteType> {
  const cloudfrontSites = sites ||
    useRenderOptions().renderOptions.cloudfrontSites
  if (!cloudfrontSites) {
    throw new Error('Cloudfront sites not configured')
  }

  const normalisedSites = CloudfrontSitesSchema.parse(cloudfrontSites)
  Object.entries(normalisedSites).forEach(([title, site]) => {
    site.title ??= title
    site.alternativeNames ??= [title]
    if (site.redirectFromNames) {
      site.redirectToName ??= site.redirectFromNames?.[0]!
    }
    if (!site.zoneNames) {
      site.zoneNames = []
      ;[...site.alternativeNames, ...(site.redirectFromNames || [])].map(
        (name) => {
          const zoneDomain = name.split('.').slice(-2).join('.')
          if (!site.zoneNames.includes(zoneDomain)) {
            site.zoneNames.push(zoneDomain)
          }
        },
      )
    }
    Object.entries(site.origins).forEach(([originKey, origin]) => {
      origin.name ??= originKey
      const targetUrl = new URL(origin.target)
      origin.targetProtocol ??= targetUrl.protocol.replace(':', '')
      origin.targetHost ??= targetUrl.host
      origin.targetPath ??= targetUrl.pathname
    })

    const pathPatterns = Object.values(site.origins).map((origin) =>
      origin.pathPattern
    )
    const uniquePathPatterns = new Set(pathPatterns)
    if (pathPatterns.length !== uniquePathPatterns.size) {
      throw new Error(
        `Site '${title}' has duplicate pathPattern values in origins`,
      )
    }
    if (!pathPatterns.includes('*')) {
      throw new Error(
        `Site '${title}' does not have a default origin with pathPattern '*'`,
      )
    }
    if (
      !Object.values(site.origins).some((origin) =>
        origin.targetProtocol !== 'https'
      )
    ) {
      throw new Error(
        `Site '${title}' require at least one real origin.`,
      )
    }
  })
  return normalisedSites
}
