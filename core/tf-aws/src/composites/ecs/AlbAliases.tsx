import { toId } from '@dinghy/base-components'
import { useAwsRoute53Zone } from '../../services/route53/AwsRoute53Zone.tsx'
import { AwsRoute53Record } from '../../services/route53/AwsRoute53Record.tsx'
import { DataAwsRoute53Zone } from '../../services/route53/DataAwsRoute53Zone.tsx'
import { useAwsLb } from '../../services/elbv2/AwsLb.tsx'
import type { EcsClusterType } from './types.ts'

// Render Route 53 zone lookups + A-alias records pointing at the cluster's
// ALB. Triggered from <Alb> when `cluster.alb.alternativeNames` is set.
// Certificate / HTTPS wiring is deliberately out of scope in this pass —
// see the CloudfrontSites composite for the pattern to re-introduce that
// later.
export function AlbAliases({ cluster }: { cluster: EcsClusterType }) {
  const alb = cluster.alb!
  const aliases = alb.alternativeNames ?? []
  const zones = alb.zoneNames ?? []
  if (!aliases.length) return null

  // Pick the narrowest configured hosted zone that the alias lives in
  // (so `api.v2.example.com` can resolve to `v2.example.com` when that's
  // the declared zone, instead of defaulting to `example.com`).
  const domainNameZone = (name: string) => {
    const normalised = name.replace(/^\*\./, '')
    const twoLevel = normalised.split('.').slice(-2).join('.')
    if (zones.includes(twoLevel)) return twoLevel
    return normalised.split('.').slice(-3).join('.')
  }

  return (
    <>
      {zones.map((zone) => (
        <DataAwsRoute53Zone
          key={zone}
          _name={toId(`${cluster.name}_${zone}`)}
          _consolidatedId={toId(`dataawsroute53zone_${zone}`)}
          _title={zone}
          _display='none'
          name={zone}
        />
      ))}
      {aliases.map((alias) => (
        <AliasRecord
          key={alias}
          cluster={cluster}
          alias={alias}
          zoneName={domainNameZone(alias)}
        />
      ))}
    </>
  )
}

function AliasRecord(
  { cluster, alias, zoneName }: {
    cluster: EcsClusterType
    alias: string
    zoneName: string
  },
) {
  const { awsLb } = useAwsLb()
  // `useAwsRoute53Zone` matches both resource and data-source Zone nodes —
  // DataAwsRoute53Zone renders `<AwsRoute53Zone _category='data' ...>`.
  const { route53Zone } = useAwsRoute53Zone(
    toId(zoneName),
  )
  return (
    <AwsRoute53Record
      _id={toId(`${cluster.name}_${alias.replace('*', 'star_')}_arecord`)}
      _title={alias}
      type='A'
      name={alias}
      zone_id={() => route53Zone.id}
      alias={() => ({
        name: awsLb.dns_name,
        zone_id: awsLb.zone_id,
        evaluate_target_health: false,
      })}
    />
  )
}
