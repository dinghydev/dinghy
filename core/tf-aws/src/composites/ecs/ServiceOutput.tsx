import { deepResolve } from '@dinghy/base-components'
import { Output } from '@dinghy/tf-common'
import { useAwsEcsService } from '../../services/ecs/AwsEcsService.tsx'
import type { EcsServiceType } from './types.ts'

// Per-service Terraform `output` block. Mirrors EC2's InstanceOutput so
// `tofu output` prints a JSON record with the service name and the list
// of container names from the task definition. Useful for piping into
// `aws ecs execute-command` or for downstream tooling that needs to know
// which containers are in each service without re-parsing the config.
export function ServiceOutput({ service }: { service: EcsServiceType }) {
  // useTypedNode strips the `Aws` prefix when the function name has 3+
  // CamelCase parts — `AwsEcsService` → `ecsService` (matches
  // useAwsEcsCluster → ecsCluster in EcsService.tsx).
  const { ecsService } = useAwsEcsService()
  const title = () => `Output of ${deepResolve(service.name)}`
  const containerNames = Object.keys(service.task.containers)
  const serviceInfo = () => ({
    Name: deepResolve(service.name),
    Containers: containerNames,
  })
  return (
    <Output
      _display='none'
      _title={title}
      _id={() => `${deepResolve(ecsService._id)}_output`}
      description={title}
      value={() => JSON.stringify(serviceInfo())}
    />
  )
}
