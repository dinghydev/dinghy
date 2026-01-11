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
  firewall_arn: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subnet_mapping: resolvableValue(
    z.object({
      ip_address_type: z.string().optional(),
      subnet_id: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_endpoint_association_arn: z.string().optional(),
  vpc_endpoint_association_id: z.string().optional(),
  vpc_endpoint_association_status: z.object({
    association_sync_state: z.set(z.object({
      attachment: z.object({
        endpoint_id: z.string(),
        status: z.string(),
        status_message: z.string(),
        subnet_id: z.string(),
      }).array(),
      availability_zone: z.string(),
    })),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkfirewall_vpc_endpoint_association

export function AwsNetworkfirewallVpcEndpointAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_vpc_endpoint_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallVpcEndpointAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkfirewallVpcEndpointAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkfirewallVpcEndpointAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkfirewallVpcEndpointAssociation,
    idFilter,
    baseNode,
    optional,
  )
