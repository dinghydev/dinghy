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

export const InputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  configuration_state: z.string().optional(),
  local_address: z.string().optional(),
  outpost_arn: z.string().optional(),
  outpost_id: z.string().optional(),
  outpost_lag_id: z.string().optional(),
  owner_id: z.string().optional(),
  peer_address: z.string().optional(),
  peer_bgp_asn: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vlan: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface

export function DataAwsEc2ServiceLinkVirtualInterface(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_service_link_virtual_interface'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2ServiceLinkVirtualInterface = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2ServiceLinkVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2ServiceLinkVirtualInterfaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2ServiceLinkVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )
