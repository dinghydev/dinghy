import { getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'

const CnameEntrySchema = z.object({
  name: z.string().optional(),
  value: z.string(),
  ttl: z.number().default(60),
  zone: z.string().optional(),
}).loose()

export type CnameEntryType = z.output<typeof CnameEntrySchema> & {
  name: string
}

export function parseCnames(
  cnames?: any,
): Record<string, CnameEntryType> {
  const renderOptions = getRenderOptions()
  const cfg = cnames || (renderOptions as any).cnames
  if (!cfg) {
    throw new Error('cnames not configured')
  }

  const parsed: Record<string, CnameEntryType> = {}
  for (const [key, raw] of Object.entries(cfg)) {
    let entry: Record<string, unknown>
    if (typeof raw === 'string') {
      entry = { name: key, value: raw }
    } else if (raw && typeof raw === 'object') {
      entry = { ...(raw as Record<string, unknown>) }
      entry.name ??= key
    } else {
      throw new Error(
        `cnames.${key} must be a string or an object (got ${typeof raw})`,
      )
    }
    parsed[key] = CnameEntrySchema.parse(entry) as CnameEntryType
  }
  return parsed
}
