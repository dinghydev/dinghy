import { toId } from '@dinghy/base-components'
import {
  AwsCloudwatchLogGroup,
  useAwsCloudwatchLogGroup,
} from '../../services/cloudwatch/AwsCloudwatchLogGroup.tsx'
import { AwsCloudwatchLogSubscriptionFilter } from '../../services/cloudwatch/AwsCloudwatchLogSubscriptionFilter.tsx'
import type { EcsServiceType } from './types.ts'

// `<SubscriptionFilter>` renders inside its `<AwsCloudwatchLogGroup>` parent
// so the tree-walk `useAwsCloudwatchLogGroup()` resolves that parent — its
// `_terraformId` becomes the `depends_on` target so Terraform creates the
// group before PutSubscriptionFilter runs. `groupName` is threaded as a
// prop because the node's `.name` is only resolvable later in the render
// pipeline, but we need a plain string now to compute a stable `_id`.
function SubscriptionFilter(
  { filter, groupName }: { filter: any; groupName: string },
) {
  const { logGroup } = useAwsCloudwatchLogGroup()
  return (
    <AwsCloudwatchLogSubscriptionFilter
      _title={filter.name}
      _id={`awscloudwatchlogsubscriptionfilter_${toId(groupName)}_${
        toId(filter.name)
      }`}
      log_group_name={groupName}
      depends_on={() => [logGroup._terraformId]}
      {...filter}
    />
  )
}

// Render the CloudWatch log groups + any subscription filters for an ECS
// service. `service.log.scope` decides whether we emit one group covering
// every container (default) or one group per container. parseEcsClusters
// has already populated names + merged container-level inheritance from the
// service-level block, so this renderer just iterates.
export function LogGroups({ service }: { service: EcsServiceType }) {
  const serviceLog = service.log as any
  const logs: any[] = serviceLog?.scope === 'service'
    ? [serviceLog]
    : Object.values(service.task.containers).map((c: any) => c.log)
  return (
    <>
      {logs.map((log) => {
        const { scope: _scope, subscription_filters, ...groupProps } = log
        return (
          <AwsCloudwatchLogGroup
            _display='entity'
            key={groupProps.name}
            {...groupProps}
          >
            {(subscription_filters ?? []).map((f: any) => (
              <SubscriptionFilter
                key={f.name}
                filter={f}
                groupName={groupProps.name}
              />
            ))}
          </AwsCloudwatchLogGroup>
        )
      })}
    </>
  )
}
