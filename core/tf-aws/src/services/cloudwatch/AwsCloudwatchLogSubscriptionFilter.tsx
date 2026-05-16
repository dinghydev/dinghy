import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsCloudwatchLogSubscriptionFilterInputSchema = TfMetaSchema
  .extend({
    destination_arn: resolvableValue(z.string()),
    filter_pattern: resolvableValue(z.string()),
    log_group_name: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    apply_on_transformed_logs: resolvableValue(z.boolean().optional()),
    distribution: resolvableValue(z.string().optional()),
    emit_system_fields: resolvableValue(z.string().array().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    role_arn: resolvableValue(z.string().optional()),
  })

export const AwsCloudwatchLogSubscriptionFilterOutputSchema = z.object({})

export const AwsCloudwatchLogSubscriptionFilterImportSchema = z.object({
  log_group_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCloudwatchLogSubscriptionFilterInputProps =
  & z.input<typeof AwsCloudwatchLogSubscriptionFilterInputSchema>
  & z.input<typeof AwsCloudwatchLogSubscriptionFilterImportSchema>
  & NodeProps

export type AwsCloudwatchLogSubscriptionFilterOutputProps =
  & z.output<typeof AwsCloudwatchLogSubscriptionFilterOutputSchema>
  & z.output<typeof AwsCloudwatchLogSubscriptionFilterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_subscription_filter

export function AwsCloudwatchLogSubscriptionFilter(
  props: Partial<AwsCloudwatchLogSubscriptionFilterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_subscription_filter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogSubscriptionFilterInputSchema}
      _outputSchema={AwsCloudwatchLogSubscriptionFilterOutputSchema}
      _importSchema={AwsCloudwatchLogSubscriptionFilterImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogSubscriptionFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogSubscriptionFilterOutputProps>(
    AwsCloudwatchLogSubscriptionFilter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogSubscriptionFilters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogSubscriptionFilterOutputProps>(
    AwsCloudwatchLogSubscriptionFilter,
    idFilter,
    baseNode,
    optional,
  )
