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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudwatch_log_subscription_filter

export function AwsCloudwatchLogSubscriptionFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_subscription_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogSubscriptionFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCloudwatchLogSubscriptionFilter,
    idFilter,
    baseNode,
    optional,
  )
