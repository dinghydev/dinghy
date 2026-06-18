import { getRenderOptions, type NodeProps, toId } from '@dinghy/base-components'
import { AwsRoute53Zone } from '../../services/route53/AwsRoute53Zone.tsx'
import { DataAwsRoute53Zone } from '../../services/route53/DataAwsRoute53Zone.tsx'
import { parseDnsZone } from './types.ts'

// Reusable hosted-zone node delegated to by every zone-consuming composite
// (DnsRecords, CloudfrontSites, ECS AlbAliases/AlbSsl). A zone listed in the
// top-level `dnsZones:` config with `useData: false` (the default) is CREATED
// via AwsRoute53Zone; `useData: true`, or a zone not listed at all, is
// REFERENCED via DataAwsRoute53Zone.
//
// `_consolidatedId` is shared per zone+branch so multiple renders of the same
// zone collapse into a single Terraform resource. `_id` must be unique per node
// (the renderer rejects duplicate ids), so callers pass an `idPrefix` scoping it
// to their context. `_id` still contains the zone token, so
// `useAwsRoute53Zone(toId(zoneName))` resolves it by substring — and since all
// renders of a zone share one `_consolidatedId`, every match yields the same
// Terraform id. `useAwsRoute53Zone` matches either branch because
// DataAwsRoute53Zone renders `<AwsRoute53Zone _category='data' ...>`.
export function DnsZone(
  { zone, idPrefix, _components, ...props }:
    & { zone: string; idPrefix?: string; _components?: Record<string, unknown> }
    & NodeProps,
) {
  const id = toId(`${idPrefix ? `${idPrefix}_` : ''}dnszone_${zone}`)
  const configured = (getRenderOptions() as any).dnsZones?.[zone] !== undefined
  const cfg = parseDnsZone(zone)
  // Not configured => data lookup (historical default). Configured => honour
  // `useData` (false creates, true references).
  const useDataSource = !configured || cfg!.useData === true

  if (useDataSource) {
    const Data = (_components?.dataZone as typeof DataAwsRoute53Zone) ||
      DataAwsRoute53Zone
    return (
      <Data
        _id={id}
        _consolidatedId={toId(`dataawsroute53zone_${zone}`)}
        _title={zone}
        _display='none'
        name={zone}
        {...props}
      />
    )
  }

  const { useData: _useData, ...zoneProps } = cfg!
  const Zone = (_components?.zone as typeof AwsRoute53Zone) || AwsRoute53Zone
  return (
    <Zone
      _id={id}
      _consolidatedId={toId(`awsroute53zone_${zone}`)}
      _title={zone}
      {...zoneProps}
      {...props}
    />
  )
}

// Render every zone declared in `dnsZones:` config. Lets a stack manage its
// configured zones standalone (e.g. create a zone that has no records yet).
export function DnsZones({ _components, ...props }: NodeProps) {
  const dnsZones = (getRenderOptions() as any).dnsZones ?? {}
  return (
    <>
      {Object.keys(dnsZones).map((zone) => (
        <DnsZone
          key={zone}
          zone={zone}
          idPrefix='dnszones'
          _components={_components}
          {...props}
        />
      ))}
    </>
  )
}
