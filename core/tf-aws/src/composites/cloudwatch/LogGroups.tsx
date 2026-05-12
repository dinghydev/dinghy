import { type NodeProps, Shape, toId } from '@dinghy/base-components'
import {
  AwsCloudwatchLogGroup,
  useAwsCloudwatchLogGroup,
} from '../../services/cloudwatch/AwsCloudwatchLogGroup.tsx'
import { AwsCloudwatchLogSubscriptionFilter } from '../../services/cloudwatch/AwsCloudwatchLogSubscriptionFilter.tsx'
import { DataAwsCloudwatchLogGroup } from '../../services/cloudwatch/DataAwsCloudwatchLogGroup.tsx'
import { type LogGroupType, parseLogGroups } from './types.ts'

// SubscriptionFilter for a managed log group: tree-walk to the parent
// `<AwsCloudwatchLogGroup>` so the filter's `depends_on` references the
// group's `_terraformId` and Terraform sequences group create → filter
// create.
function ManagedSubscriptionFilter(
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

// SubscriptionFilter for an imported (data-source) log group: the group
// already exists, no depends_on needed.
function ImportedSubscriptionFilter(
  { filter, groupName }: { filter: any; groupName: string },
) {
  return (
    <AwsCloudwatchLogSubscriptionFilter
      _title={filter.name}
      _id={`awscloudwatchlogsubscriptionfilter_${toId(groupName)}_${
        toId(filter.name)
      }`}
      log_group_name={groupName}
      {...filter}
    />
  )
}

export function LogGroups(props: NodeProps) {
  const logGroups = parseLogGroups((props as any).logGroups)
  const ContainerComponent = props._components?.logGroups as typeof Shape ||
    Shape
  const LogGroupComponent =
    props._components?.cloudwatchLogGroup as typeof AwsCloudwatchLogGroup ||
    AwsCloudwatchLogGroup
  const DataLogGroupComponent = props._components
    ?.cloudwatchLogGroupData as typeof DataAwsCloudwatchLogGroup ||
    DataAwsCloudwatchLogGroup
  return (
    <ContainerComponent _direction='vertical' {...props}>
      {Object.values(logGroups).map((group: LogGroupType) => {
        const {
          subscription_filters,
          arn: _arn,
          ...groupProps
        } = group as any
        if (group.arn) {
          // Imported: data lookup by name (extracted from the ARN in the
          // parser). All other group-level fields are intentionally dropped
          // — they belong to whoever owns the existing group.
          return (
            <DataLogGroupComponent
              _id={toId(`awscloudwatchloggroup_${group.name}`)}
              _title={group.name}
              _display='entity'
              key={group.name}
              name={group.name}
            >
              {(subscription_filters ?? []).map((f: any) => (
                <ImportedSubscriptionFilter
                  key={f.name}
                  filter={f}
                  groupName={group.name}
                />
              ))}
            </DataLogGroupComponent>
          )
        }
        return (
          <LogGroupComponent
            _id={toId(`awscloudwatchloggroup_${group.name}`)}
            _title={group.name}
            _display='entity'
            key={group.name}
            {...groupProps}
          >
            {(subscription_filters ?? []).map((f: any) => (
              <ManagedSubscriptionFilter
                key={f.name}
                filter={f}
                groupName={group.name}
              />
            ))}
          </LogGroupComponent>
        )
      })}
      {props.children}
    </ContainerComponent>
  )
}
