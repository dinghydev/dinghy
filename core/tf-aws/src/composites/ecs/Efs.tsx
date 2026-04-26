import { type NodeProps, Shape, toId } from '@dinghy/base-components'
import { AwsEfsAccessPoint } from '../../services/efs/AwsEfsAccessPoint.tsx'
import { AwsEfsBackupPolicy } from '../../services/efs/AwsEfsBackupPolicy.tsx'
import { AwsEfsFileSystem } from '../../services/efs/AwsEfsFileSystem.tsx'
import { AwsEfsMountTarget } from '../../services/efs/AwsEfsMountTarget.tsx'
import { useAwsSecurityGroup } from '../../services/vpc/AwsSecurityGroup.tsx'
import { AwsVpcSecurityGroupIngressRule } from '../../services/vpc/AwsVpcSecurityGroupIngressRule.tsx'
import { efsAccessPointId, efsId } from './ids.ts'
import type { EcsEfsType, EcsServiceType } from './types.ts'

const SUBNET_ID_RE = /^subnet-[0-9a-f]+$/i
const SG_ID_RE = /^sg-[0-9a-f]+$/i

// Per-service EFS: aws_efs_file_system + per-subnet mount targets +
// optional backup policy and access point per `service.efs[*]` entry.
//
// SG strategy: never touch user-supplied SGs. The mount target is wired
// to whatever SG the task already runs on (resolved the same way
// EcsService does it):
//   - When the user supplied SGs by name/id: attach those directly to the
//     mount target. No new resource. Prerequisite: those SGs must allow
//     NFS 2049 between themselves (or from each other) — the user owns
//     them, so the composite stays out.
//   - When the task SG is on-demand (composite-owned via the on-demand
//     VPC composite): attach the on-demand SG and add a 2049 self-ingress
//     rule to it (deduped via _consolidatedId, so multiple services can
//     share the rule).
//
// The matching `volume` block on the task definition + per-container
// `mountPoints` are wired in EcsTask.tsx using the same id helpers.
export function Efs(
  { service, ...props }: NodeProps & { service: EcsServiceType },
) {
  const efs = service.efs
  if (!efs || !Object.keys(efs).length) return null

  const isPrivate = service.network_configuration?.assign_public_ip === false
  const taskSgConfigured = service.network_configuration?.security_groups ?? []
  const taskSgIsOnDemand = taskSgConfigured.length === 0

  // Tree-walk for the on-demand SG only when needed — avoids the
  // "Tag AwsSecurityGroup not found" failure when the user supplies SGs
  // and there's no on-demand VPC in the tree.
  const { awsSecurityGroup } = taskSgIsOnDemand
    ? useAwsSecurityGroup(isPrivate ? 'private' : 'public')
    : { awsSecurityGroup: undefined as any }

  const mtSecurityGroups = taskSgIsOnDemand
    ? () => [awsSecurityGroup.id]
    : taskSgConfigured.map((s) =>
      SG_ID_RE.test(s)
        ? s
        : `\${data.aws_security_group.awssecuritygroup_${toId(s)}.id}`
    )

  const subnetNames = service.network_configuration?.subnets ?? []
  const subnetRefs = subnetNames.map((s) =>
    SUBNET_ID_RE.test(s) ? s : `\${data.aws_subnet.awssubnet_${toId(s)}.id}`
  )

  const EfsComponent = props._components?.efs as typeof Shape || Shape

  return (
    <EfsComponent _display='entity' {...props}>
      {taskSgIsOnDemand && (
        <AwsVpcSecurityGroupIngressRule
          _id='awsvpcsecuritygroupingressrule_efs_self_2049'
          _consolidatedId='awsvpcsecuritygroupingressrule_efs_self_2049'
          _title='EFS NFS self ingress 2049'
          security_group_id={awsSecurityGroup.id}
          referenced_security_group_id={awsSecurityGroup.id}
          ip_protocol='tcp'
          from_port={2049}
          to_port={2049}
        />
      )}
      {Object.entries(efs).map(([key, entry]) => (
        <EfsEntry
          key={key}
          service={service}
          entryKey={key}
          entry={entry}
          subnetNames={subnetNames}
          subnetRefs={subnetRefs}
          mtSecurityGroups={mtSecurityGroups}
        />
      ))}
    </EfsComponent>
  )
}

function EfsEntry(
  { service, entryKey, entry, subnetNames, subnetRefs, mtSecurityGroups }: {
    service: EcsServiceType
    entryKey: string
    entry: EcsEfsType
    subnetNames: string[]
    subnetRefs: string[]
    mtSecurityGroups: any
  },
) {
  const fsTfId = efsId(service, entryKey)
  const apTfId = efsAccessPointId(service, entryKey)
  const fsName = `${service.name}-${entryKey}`
  const fsRef = `\${aws_efs_file_system.${fsTfId}.id}`

  return (
    <>
      <AwsEfsFileSystem
        _id={fsTfId}
        _title={fsName}
        creation_token={fsName}
        encrypted={entry.encrypted}
        performance_mode={entry.performance_mode}
        throughput_mode={entry.throughput_mode}
        tags={{ Name: fsName }}
      />

      {entry.backup_policy === 'ENABLED' && (
        <AwsEfsBackupPolicy
          _id={toId(`${fsTfId}_backup`)}
          _title={`${fsName} backup`}
          file_system_id={fsRef}
          backup_policy={{ status: 'ENABLED' }}
        />
      )}

      {entry.access_point && (
        <AwsEfsAccessPoint
          _id={apTfId}
          _title={`${fsName} ap`}
          file_system_id={fsRef}
          posix_user={entry.access_point.posix_user}
          root_directory={entry.access_point.root_directory}
          tags={{ Name: `${fsName}-ap` }}
        />
      )}

      {subnetRefs.map((ref, i) => (
        <AwsEfsMountTarget
          key={`mt_${i}`}
          _id={toId(`${fsTfId}_mt_${i}`)}
          _title={`${fsName} MT ${subnetNames[i]}`}
          file_system_id={fsRef}
          subnet_id={ref}
          security_groups={mtSecurityGroups}
        />
      ))}
    </>
  )
}
