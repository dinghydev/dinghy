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

export const AwsVpclatticeAccessLogSubscriptionInputSchema = TfMetaSchema
  .extend({
    destination_arn: resolvableValue(z.string()),
    resource_identifier: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    service_network_log_type: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsVpclatticeAccessLogSubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  resource_arn: z.string().optional(),
})

export type AwsVpclatticeAccessLogSubscriptionInputProps =
  & z.input<typeof AwsVpclatticeAccessLogSubscriptionInputSchema>
  & NodeProps

export type AwsVpclatticeAccessLogSubscriptionOutputProps =
  & z.output<typeof AwsVpclatticeAccessLogSubscriptionOutputSchema>
  & z.output<typeof AwsVpclatticeAccessLogSubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_access_log_subscription

export function AwsVpclatticeAccessLogSubscription(
  props: Partial<AwsVpclatticeAccessLogSubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_access_log_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeAccessLogSubscriptionInputSchema}
      _outputSchema={AwsVpclatticeAccessLogSubscriptionOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeAccessLogSubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeAccessLogSubscriptionOutputProps>(
    AwsVpclatticeAccessLogSubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeAccessLogSubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeAccessLogSubscriptionOutputProps>(
    AwsVpclatticeAccessLogSubscription,
    idFilter,
    baseNode,
    optional,
  )
