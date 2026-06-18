import {
  getRenderOptions,
  ResolvableBooleanSchema,
} from '@dinghy/base-components'
import { z } from 'zod'
import { AwsRoute53RecordInputSchema } from '../../services/route53/AwsRoute53Record.tsx'
import { AwsRoute53ZoneInputSchema } from '../../services/route53/AwsRoute53Zone.tsx'

const DnsRecordSchema = AwsRoute53RecordInputSchema.extend({
  // Default CNAME keeps the `name: target` string shorthand working.
  type: z.string().default('CNAME'),
  // Composite ergonomics: name the hosted zone (looked up via a data source)
  // instead of supplying the raw zone_id; derived from the record name when
  // omitted.
  zone: z.string().optional(),
  zone_id: z.string().optional(),
  // Single-value shorthand: `value: x` becomes `records: [x]`.
  value: z.string().optional(),
  ttl: z.number().default(60),
}).loose()

export type DnsRecordType = z.output<typeof DnsRecordSchema> & {
  name: string
}

export function parseDnsRecords(
  dnsRecords?: any,
): Record<string, DnsRecordType> {
  const renderOptions = getRenderOptions()
  const cfg = dnsRecords || (renderOptions as any).dnsRecords
  if (!cfg) {
    throw new Error('dnsRecords not configured')
  }

  const parsed: Record<string, DnsRecordType> = {}
  for (const [key, raw] of Object.entries(cfg)) {
    let entry: Record<string, unknown>
    if (typeof raw === 'string') {
      entry = { name: key, value: raw }
    } else if (raw && typeof raw === 'object') {
      entry = { ...(raw as Record<string, unknown>) }
      entry.name ??= key
    } else {
      throw new Error(
        `dnsRecords.${key} must be a string or an object (got ${typeof raw})`,
      )
    }
    parsed[key] = DnsRecordSchema.parse(entry) as DnsRecordType
  }
  return parsed
}

const DnsZoneSchema = AwsRoute53ZoneInputSchema.extend({
  // false (default) => create the zone (AwsRoute53Zone); true => reference an
  // existing zone (DataAwsRoute53Zone).
  // NOTE: this polarity is intentionally the reverse of s3Backend/logBucket
  // `useData` (where true means "use a data source").
  useData: ResolvableBooleanSchema.default(false),
  // Emit a Terraform output of the created zone's delegation name servers.
  // Created zones only (referenced zones have none). Enabled by default.
  outputNameServers: ResolvableBooleanSchema.default(true),
}).loose()

export type DnsZoneType = z.output<typeof DnsZoneSchema>

// Returns the parsed `dnsZones[zone]` entry, or null when the zone is not
// configured (callers treat "not configured" as a data-source lookup, which
// preserves the historical behaviour of every zone-consuming composite).
export function parseDnsZone(zone: string): DnsZoneType | null {
  const cfg = (getRenderOptions() as any).dnsZones?.[zone]
  if (cfg === undefined) return null
  return DnsZoneSchema.parse({ name: zone, ...cfg })
}
