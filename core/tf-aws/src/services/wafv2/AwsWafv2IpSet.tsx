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

export const AwsWafv2IpSetInputSchema = TfMetaSchema.extend({
  ip_address_version: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  addresses: resolvableValue(z.string().array().optional()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafv2IpSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  lock_token: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafv2IpSetInputProps =
  & z.input<typeof AwsWafv2IpSetInputSchema>
  & NodeProps

export type AwsWafv2IpSetOutputProps =
  & z.output<typeof AwsWafv2IpSetOutputSchema>
  & z.output<typeof AwsWafv2IpSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_ip_set

export function AwsWafv2IpSet(props: Partial<AwsWafv2IpSetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_ip_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafv2IpSetInputSchema}
      _outputSchema={AwsWafv2IpSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2IpSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafv2IpSetOutputProps>(
    AwsWafv2IpSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2IpSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafv2IpSetOutputProps>(
    AwsWafv2IpSet,
    idFilter,
    baseNode,
    optional,
  )
