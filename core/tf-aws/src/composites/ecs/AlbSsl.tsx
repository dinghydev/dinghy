import { deepResolve, toId } from '@dinghy/base-components'
import { AwsAcmCertificate } from '../../services/acm/AwsAcmCertificate.tsx'
import { AwsAcmCertificateValidation } from '../../services/acm/AwsAcmCertificateValidation.tsx'
import { useAwsRoute53Zone } from '../../services/route53/AwsRoute53Zone.tsx'
import { AwsRoute53Record } from '../../services/route53/AwsRoute53Record.tsx'
import { DataAwsRoute53Zone } from '../../services/route53/DataAwsRoute53Zone.tsx'
import { certId } from './ids.ts'
import type { EcsClusterType } from './types.ts'

// ACM certificate + DNS validation for the cluster's ALB. Rendered by
// <Alb> when any HTTPS listener exists and `alb.certificate_arn` is NOT
// already supplied by the user. The cert covers every
// `alb.alternativeNames` entry plus any inferred versionless sibling —
// e.g. `oss-v2.andopen.co` also gets `oss.andopen.co`. Zones are looked
// up the same way `AlbAliases` does (shared `DataAwsRoute53Zone` via
// `_consolidatedId`). The `aws_acm_certificate_validation` resource
// blocks until ACM verifies every DVO CNAME, so downstream listener
// references to the cert ARN are safe.
export function AlbSsl({ cluster }: { cluster: EcsClusterType }) {
  const alb = cluster.alb!
  const aliases = alb.alternativeNames ?? []
  if (!aliases.length) return null

  // Expand `<name>-v<N>.<domain>` into `{<name>-v<N>.<domain>, <name>.<domain>}`
  // so a single cert covers the versioned hostname and its versionless
  // sibling. Ordering is preserved; dedup via Set.
  const expanded: string[] = []
  for (const name of aliases) {
    if (!expanded.includes(name)) expanded.push(name)
    const m = name.match(/^([^.]+)-v\d+(\..+)$/)
    if (m) {
      const sibling = m[1] + m[2]
      if (!expanded.includes(sibling)) expanded.push(sibling)
    }
  }

  const zoneNames = alb.zoneNames ?? []
  const domainNameZone = (name: string) => {
    const normalised = name.replace(/^\*\./, '')
    const twoLevel = normalised.split('.').slice(-2).join('.')
    if (zoneNames.includes(twoLevel)) return twoLevel
    return normalised.split('.').slice(-3).join('.')
  }

  const certTfId = certId(cluster)

  // Unique zones that every expanded alias lives in — rendered here so
  // the validation CNAMEs can tree-walk to them without depending on the
  // render order of sibling components. `_consolidatedId` matches the one
  // AlbAliases uses, so the two renders collapse into a single data source.
  const validationZones: string[] = []
  for (const alias of expanded) {
    const z = domainNameZone(alias)
    if (!validationZones.includes(z)) validationZones.push(z)
  }

  return (
    <>
      {validationZones.map((zone) => (
        <DataAwsRoute53Zone
          key={zone}
          _id={toId(`${cluster.name}_${zone}_zone_ssl`)}
          _consolidatedId={toId(`dataawsroute53zone_${zone}`)}
          _title={zone}
          _display='none'
          name={zone}
        />
      ))}
      <AwsAcmCertificate
        _id={certTfId}
        _title={`${cluster.name} ALB cert`}
        domain_name={expanded[0]}
        subject_alternative_names={expanded.slice(1)}
        validation_method='DNS'
        lifecycle={{ create_before_destroy: true }}
      />
      {expanded.map((alias) => (
        <ValidationCname
          key={alias}
          cluster={cluster}
          alias={alias}
          zoneName={domainNameZone(alias)}
        />
      ))}
      <AwsAcmCertificateValidation
        _id={toId(`${cluster.name}_alb_cert_validation`)}
        _title={`${cluster.name} ALB cert validation`}
        certificate_arn={`\${aws_acm_certificate.${certTfId}.arn}`}
        validation_record_fqdns={() =>
          expanded.map((alias) =>
            `\${aws_route53_record.${validationRecordId(alias)}.fqdn}`
          )}
      />
    </>
  )
}

function validationRecordId(alias: string): string {
  return toId(
    `awsroute53record_validationcname_${alias.replace('*', 'star_')}`,
  )
}

function ValidationCname(
  { cluster, alias, zoneName }: {
    cluster: EcsClusterType
    alias: string
    zoneName: string
  },
) {
  const { route53Zone } = useAwsRoute53Zone(
    toId(`${cluster.name}_${zoneName}_zone_ssl`),
  )
  const certTfId = certId(cluster)
  // domain_validation_options is a set; we have to filter down to the
  // entry matching this specific alias. `one(…)` asserts exactly one
  // match so Terraform errors loudly if ACM returns something unexpected.
  const dvoRef = (key: string) =>
    `\${one([\n  for dvo in aws_acm_certificate.${certTfId}.domain_validation_options :\n  dvo if dvo.domain_name == "${alias}"\n]).${key}}`
  return (
    <AwsRoute53Record
      _id={toId(
        `awsroute53record_validationcname_${cluster.name}_${
          alias.replace('*', 'star_')
        }`,
      )}
      _consolidatedId={validationRecordId(alias)}
      _title={`Validate ${alias}`}
      type='CNAME'
      ttl={60}
      name={() => deepResolve(dvoRef('resource_record_name'))}
      records={() => [deepResolve(dvoRef('resource_record_value'))]}
      allow_overwrite
      zone_id={() => route53Zone.id}
    />
  )
}
