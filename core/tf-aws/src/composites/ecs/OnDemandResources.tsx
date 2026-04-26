import { type NodeProps, Shape } from '@dinghy/base-components'
import { Vpc } from '../vpc/Vpc.tsx'
import { IamRole } from '../iam/IamRole.tsx'
import { executionRoleName, taskRoleName } from './ids.ts'
import type { EcsClustersType } from './types.ts'

// Shared resources created once per stack. `clusters` is inspected to decide
// which on-demand resources are actually needed — mirroring the
// `createVpc` / `createInstanceProfile` flag pattern in Ec2Servers.tsx.
export function OnDemandResources(
  props: NodeProps & { clusters: EcsClustersType },
) {
  const clusterList = Object.values(props.clusters)
  // VPC + execution role are only useful if at least one service exists
  // across all clusters — an empty cluster just gets its AwsEcsCluster.
  const hasAnyService = clusterList.some((c) =>
    Object.keys(c.services).length > 0
  )
  if (!hasAnyService) return null

  // Need an on-demand VPC if ANY service lacks explicit subnets OR explicit
  // security_groups. Services that ship both reference an existing VPC; if
  // EVERY service does that we skip VPC provisioning entirely.
  const needsVpc = clusterList.some((c) =>
    Object.values(c.services).some(
      (s) =>
        !(s.network_configuration?.subnets?.length) ||
        !(s.network_configuration?.security_groups?.length),
    )
  )
  // Need an on-demand IAM execution role if ANY service lacks an explicit
  // `task.execution_role_arn`. Services that ship an ARN reference an external
  // role; if EVERY service does that we skip IAM provisioning entirely.
  const needsExecutionRole = clusterList.some((c) =>
    Object.values(c.services).some((s) => !s.task?.execution_role_arn)
  )
  // Same logic for the task role — used by the container workload itself, in
  // particular for ECS Exec (requires ssmmessages:* on the task role).
  const needsTaskRole = clusterList.some((c) =>
    Object.values(c.services).some((s) => !s.task?.task_role_arn)
  )
  if (!needsVpc && !needsExecutionRole && !needsTaskRole) return null

  const OnDemandComponent =
    props._components?.onDemandResources as typeof Shape || Shape
  const VpcComponent = props._components?.vpc as typeof Vpc || Vpc
  const IamRoleComponent = props._components?.executionRole as typeof IamRole ||
    IamRole

  return (
    <OnDemandComponent>
      {needsVpc && <VpcComponent _display='entity' _title='VPC' />}
      {needsExecutionRole && (
        <IamRoleComponent
          _display='entity'
          name={executionRoleName()}
          assume_role_service='ecs-tasks.amazonaws.com'
          policies={{
            managed: [{
              name:
                'arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy',
            }],
          }}
        />
      )}
      {needsTaskRole && (
        <IamRoleComponent
          _display='entity'
          name={taskRoleName()}
          assume_role_service='ecs-tasks.amazonaws.com'
          policies={{
            // ECS Exec: the task role (not the execution role) must grant the
            // SSM messaging actions so the task's ssm-agent can open a channel
            // back to the SSM service. `AmazonSSMManagedInstanceCore` includes
            // the four ssmmessages:*Channel actions AWS documents for ECS Exec
            // and matches the policy Ec2Servers attaches when `enableSsm`.
            managed: [{
              name: 'arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore',
            }],
          }}
        />
      )}
    </OnDemandComponent>
  )
}
