import { getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { AwsCloudwatchLogGroupInputSchema } from '../../services/cloudwatch/AwsCloudwatchLogGroup.tsx'
import { AwsCloudwatchLogSubscriptionFilterInputSchema } from '../../services/cloudwatch/AwsCloudwatchLogSubscriptionFilter.tsx'

// Shared shape for a CloudWatch log group + its subscription filters. Used
// directly by the top-level `logGroups:` YAML map (via parseLogGroups) and
// re-extended by other composites (e.g. ECS adds `scope` for service-level
// log config — see composites/ecs/types.ts).
export const LogGroupSubscriptionFilterSchema =
  AwsCloudwatchLogSubscriptionFilterInputSchema.partial().extend({
    name: z.string(),
    destination_arn: z.string(),
    filter_pattern: z.string().default(''),
    // Required when `destination_arn` is a Kinesis Firehose stream (Logs
    // must assume a role to PutRecord on Firehose).
    role_arn: z.string().optional(),
  }).loose()

export const LogGroupSchema = AwsCloudwatchLogGroupInputSchema.partial().extend(
  {
    subscription_filters: LogGroupSubscriptionFilterSchema.array().default([]),
    // When set, the entry references an existing log group: the composite
    // renders a DataAwsCloudwatchLogGroup lookup (name extracted from the
    // ARN) instead of an AwsCloudwatchLogGroup managed resource. Other
    // group-level fields (retention_in_days, kms_key_id, tags…) are ignored
    // in this mode — they belong to whoever owns the existing group.
    // Subscription filters still attach.
    arn: z.string().optional(),
  },
).loose()

const LogGroupsSchema = z.record(z.string(), LogGroupSchema)

export type LogGroupSubscriptionFilterType = z.output<
  typeof LogGroupSubscriptionFilterSchema
>
export type LogGroupType =
  & z.output<typeof LogGroupSchema>
  & { name: string }

// `arn:aws:logs:<region>:<account>:log-group:<name>` or with trailing `:*`
function extractLogGroupName(arn: string): string {
  const marker = ':log-group:'
  const idx = arn.indexOf(marker)
  if (idx === -1) {
    throw new Error(`invalid CloudWatch log-group ARN: ${arn}`)
  }
  const tail = arn.slice(idx + marker.length)
  return tail.endsWith(':*') ? tail.slice(0, -2) : tail
}

export function parseLogGroups(
  logGroups?: any,
): Record<string, LogGroupType> {
  const renderOptions = getRenderOptions()
  const cfg = logGroups || (renderOptions as any).logGroups
  if (!cfg) {
    throw new Error('logGroups not configured')
  }
  const parsed = LogGroupsSchema.parse(cfg) as Record<string, any>
  for (const [key, group] of Object.entries(parsed)) {
    if (group.arn) {
      // ARN is the source of truth in import mode — overrides any explicit
      // name to keep the two consistent.
      group.name = extractLogGroupName(group.arn)
    } else {
      group.name ??= key
    }
  }
  return parsed as Record<string, LogGroupType>
}
