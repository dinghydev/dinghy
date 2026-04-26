import {
  deepResolve,
  dockerBuildArch,
  dockerBuildImage,
  type NodeProps,
  toId,
} from '@dinghy/base-components'
import { useAwsProvider } from '../../foundation/AwsProvider.tsx'
import { AwsEcsTaskDefinition } from '../../services/ecs/AwsEcsTaskDefinition.tsx'
import { useAwsIamRole } from '../../services/iam/AwsIamRole.tsx'
import {
  efsAccessPointId,
  efsId,
  executionRoleName,
  taskRoleName,
} from './ids.ts'
import type { EcsServiceType } from './types.ts'

// One Fargate task definition per service. Container definitions are built
// from service.containers via `buildEcsContainerDef`. The execution role is
// looked up via `useAwsIamRole` — no prop drilling for AWS resources.
export function EcsTask(
  { service, ...props }: NodeProps & { service: EcsServiceType },
) {
  const { task } = service
  const { awsProvider } = useAwsProvider()
  const { iamRole } = useAwsIamRole(toId(executionRoleName()))
  // Task role is provisioned on-demand (for ECS Exec); look it up optionally
  // so services that ship their own `task_role_arn` don't require one.
  const { iamRole: taskRole } = useAwsIamRole(
    toId(taskRoleName()),
    undefined,
    true,
  )

  // parseEcsClusters populates `service.log.name` when scope === 'service'
  // and `container.log.name` when scope === 'container'. The container's
  // awslogs-group always comes from whichever is in play.
  const serviceLog = service.log as any
  const serviceScope = serviceLog?.scope ?? 'service'

  // Pre-compute per-container EFS mountPoints from `service.efs`. ServiceEfs
  // (sibling) renders the matching aws_efs_file_system / mount_target / SG
  // chain using the same id helpers, so the refs below resolve to the
  // composite-rendered resources at apply time.
  const efsEntries = Object.entries(service.efs ?? {})
  const mountPointsByContainer: Record<string, any[]> = {}
  for (const [key, entry] of efsEntries) {
    ;(mountPointsByContainer[entry.container] ??= []).push({
      sourceVolume: key,
      containerPath: entry.container_path,
      readOnly: entry.readonly,
    })
  }
  // Task-level `volume` blocks. transit_encryption is always ENABLED — EFS
  // accepts plaintext mounts but ENABLED is the only sensible default and
  // matches the encrypted-at-rest filesystem above. When an access point
  // is set its id wins and root_directory must be `/` (AWS rule).
  const efsVolumes = efsEntries.map(([key, entry]) => ({
    name: key,
    efs_volume_configuration: {
      file_system_id: `\${aws_efs_file_system.${efsId(service, key)}.id}`,
      root_directory: entry.access_point ? '/' : entry.root_directory,
      transit_encryption: 'ENABLED',
      ...(entry.access_point
        ? {
          authorization_config: {
            access_point_id: `\${aws_efs_access_point.${
              efsAccessPointId(service, key)
            }.id}`,
            iam: 'DISABLED',
          },
        }
        : {}),
    },
  }))
  const containerDefinitions = () =>
    Object.values(task.containers).map((container) => {
      if (!container.image.includes(':')) {
        container.image = dockerBuildImage(container.image)
      }
      // Strip composite-only fields before spreading. `log` is consumed
      // by EcsService for the log group; `envs` is a map shorthand we
      // translate into ECS's `environment: [{name, value}]` array below.
      const {
        log: containerLog,
        envs,
        environment,
        ...containerDef
      } = container as any
      const groupName = serviceScope === 'service'
        ? serviceLog.name
        : containerLog?.name
      // The main container gets a `portMappings` entry for its listening
      // port when the service attaches to an ALB — ECS rejects
      // load_balancer container registrations otherwise. User-supplied
      // portMappings (spread via ...containerDef) take precedence.
      // AWS treats hostPort as equal to containerPort under `awsvpc`
      // network mode. Setting it explicitly avoids state drift.
      const portMappings = container.name === service.main_container &&
          service.target_group && !containerDef.portMappings
        ? [{
          containerPort: service.main_container_port,
          hostPort: service.main_container_port,
          protocol: 'tcp',
        }]
        : undefined
      // Merge any pre-existing `environment` array with the `envs` map.
      // Booleans / numbers / null are stringified — AWS only accepts
      // strings on container env values.
      const envFromMap = Object.entries(envs ?? {}).map(([name, value]) => ({
        name,
        value: value == null ? '' : String(value),
      }))
      const mergedEnv = [...(environment ?? []), ...envFromMap]

      // AWS's ECS API stores container definitions with these
      // empty-collection / boolean defaults filled in. Setting them
      // explicitly here means re-applies don't show drift on
      // already-converged containers. `stopTimeout: 10` is tighter than
      // Fargate's 30s default — favours fast deploys; override per
      // container if a graceful shutdown needs longer.
      return {
        essential: true,
        environment: mergedEnv,
        mountPoints: mountPointsByContainer[container.name] ?? [],
        portMappings: portMappings ?? [],
        systemControls: [],
        volumesFrom: [],
        stopTimeout: 10,
        logConfiguration: {
          logDriver: 'awslogs',
          options: {
            'awslogs-group': groupName,
            'awslogs-region': deepResolve(awsProvider.region),
            'awslogs-stream-prefix': container.name,
          },
        },
        ...containerDef,
      }
    })

  const TaskDefinitionComponent =
    props._components?.taskDefinition as typeof AwsEcsTaskDefinition ||
    AwsEcsTaskDefinition

  // Merge user-supplied `task.volume` with composite-generated EFS volumes.
  // `task` is spread last so its keys take precedence; pull `volume` out
  // here so we can append rather than overwrite.
  const { volume: userVolumes, ...taskRest } = task as any
  const volume = [...(userVolumes ?? []), ...efsVolumes]

  return (
    <TaskDefinitionComponent
      _id={`awsecstaskdefinition_${toId(service.name)}`}
      family={service.name as string}
      execution_role_arn={iamRole.arn}
      task_role_arn={taskRole?.arn}
      container_definitions={() => JSON.stringify(containerDefinitions())}
      runtime_platform={{
        operating_system_family: 'LINUX',
        cpu_architecture: dockerBuildArch(),
      }}
      {...taskRest}
      volume={volume.length ? volume : undefined}
    />
  )
}
