import { toId } from '@dinghy/base-components'
import { AwsSecurityGroup } from '../../services/vpc/AwsSecurityGroup.tsx'
import { useAwsSecurityGroup } from '../../services/vpc/AwsSecurityGroup.tsx'
import { AwsVpcSecurityGroupEgressRule } from '../../services/vpc/AwsVpcSecurityGroupEgressRule.tsx'
import { AwsVpcSecurityGroupIngressRule } from '../../services/vpc/AwsVpcSecurityGroupIngressRule.tsx'
import { DataAwsSecurityGroup } from '../../services/vpc/DataAwsSecurityGroup.tsx'

const SG_ID_RE = /^sg-[0-9a-f]+$/i

// Description of a brand-new SG that the helper should render when the
// caller supplies no existing SG list. Each ingress entry turns into an
// `aws_vpc_security_group_ingress_rule` (defaults: tcp, 0.0.0.0/0). Egress
// is always an open all-out rule — the common case for internet-facing
// clients / load balancers.
export type ResolveSecurityGroupsDefaults = {
  id: string
  title: string
  namePrefix: string
  description: string
  vpcId: any
  ingress: Array<{
    port: number
    cidr_ipv4?: string
    ip_protocol?: string
  }>
}

// Turn a user-facing security-group list into Terraform-usable refs:
//   - `sg-xxxxx` IDs pass through verbatim
//   - anything else is a Name tag → looked up via DataAwsSecurityGroup and
//     rewritten to `${data.aws_security_group.awssecuritygroup_<toId(name)>.id}`
//   - null / empty →
//       - if `defaults` is provided, render a fresh SG + ingress/egress
//         rules and reference its id
//       - otherwise fall back to the on-demand VPC's public or private SG
//
// Returns a lazy `securityGroupIds()` resolver plus a `<SecurityGroups />`
// component that renders every data-source lookup AND the on-demand SG +
// rules (when `defaults` triggered that path). Multiple callers sharing a
// name dedupe via `_consolidatedId`.
export function resolveSecurityGroups(
  securityGroups: string[] | null,
  isPrivate: boolean,
  defaults?: ResolveSecurityGroupsDefaults,
) {
  const configured = securityGroups ?? []
  const lookupNames = configured.filter((s) => !SG_ID_RE.test(s))
  const useDefaults = !configured.length && !!defaults

  // Only call the on-demand-VPC fallback when we actually need it — i.e.
  // the user supplied nothing AND we have no `defaults` to build a fresh
  // SG from. This avoids the "Tag AwsSecurityGroup not found" tree-walk
  // failure when services bring their own VPC.
  const { securityGroup } = configured.length || useDefaults
    ? { securityGroup: undefined as any }
    : useAwsSecurityGroup(isPrivate ? 'private' : 'public')

  const resolved = configured.length
    ? configured.map((s) =>
      SG_ID_RE.test(s)
        ? s
        : `\${data.aws_security_group.awssecuritygroup_${toId(s)}.id}`
    )
    : useDefaults
    ? [`\${aws_security_group.${defaults!.id}.id}`]
    : undefined

  const securityGroupIds = () => resolved ?? [securityGroup.id]

  const SecurityGroups = () => (
    <>
      {lookupNames.map((name) => (
        <DataAwsSecurityGroup
          key={name}
          _title={name}
          _display='none'
          _consolidatedId={`awssecuritygroup_${toId(name)}`}
          tags={{ Name: name }}
        />
      ))}
      {useDefaults && <DefaultSecurityGroup defaults={defaults!} />}
    </>
  )

  return { securityGroupIds, SecurityGroups }
}

function DefaultSecurityGroup(
  { defaults }: { defaults: ResolveSecurityGroupsDefaults },
) {
  const sgRef = `\${aws_security_group.${defaults.id}.id}`
  return (
    <>
      <AwsSecurityGroup
        _id={defaults.id}
        _title={defaults.title}
        name_prefix={defaults.namePrefix}
        description={defaults.description}
        vpc_id={defaults.vpcId}
      />
      {defaults.ingress.map((rule) => (
        <AwsVpcSecurityGroupIngressRule
          key={`${rule.ip_protocol ?? 'tcp'}_${rule.port}`}
          _id={toId(
            `${defaults.id}_${rule.ip_protocol ?? 'tcp'}_${rule.port}_in`,
          )}
          _title={`${defaults.title} ingress ${rule.port}`}
          security_group_id={sgRef}
          cidr_ipv4={rule.cidr_ipv4 ?? '0.0.0.0/0'}
          ip_protocol={rule.ip_protocol ?? 'tcp'}
          from_port={rule.port}
          to_port={rule.port}
        />
      ))}
      <AwsVpcSecurityGroupEgressRule
        _id={toId(`${defaults.id}_all_out`)}
        _title={`${defaults.title} egress`}
        security_group_id={sgRef}
        cidr_ipv4='0.0.0.0/0'
        ip_protocol='-1'
      />
    </>
  )
}
