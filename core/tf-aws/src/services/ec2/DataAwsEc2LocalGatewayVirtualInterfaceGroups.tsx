import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2LocalGatewayVirtualInterfaceGroupsInputSchema =
  TfMetaSchema.extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsEc2LocalGatewayVirtualInterfaceGroupsOutputSchema = z
  .object({
    id: z.string().optional(),
    ids: z.string().array().optional(),
    local_gateway_virtual_interface_ids: z.string().array().optional(),
  })

export type DataAwsEc2LocalGatewayVirtualInterfaceGroupsInputProps =
  & z.input<typeof DataAwsEc2LocalGatewayVirtualInterfaceGroupsInputSchema>
  & NodeProps

export type DataAwsEc2LocalGatewayVirtualInterfaceGroupsOutputProps =
  & z.output<typeof DataAwsEc2LocalGatewayVirtualInterfaceGroupsOutputSchema>
  & z.output<typeof DataAwsEc2LocalGatewayVirtualInterfaceGroupsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_local_gateway_virtual_interface_groups

export function DataAwsEc2LocalGatewayVirtualInterfaceGroups(
  props: Partial<DataAwsEc2LocalGatewayVirtualInterfaceGroupsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_virtual_interface_groups'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2LocalGatewayVirtualInterfaceGroupsInputSchema}
      _outputSchema={DataAwsEc2LocalGatewayVirtualInterfaceGroupsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2LocalGatewayVirtualInterfaceGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2LocalGatewayVirtualInterfaceGroupsOutputProps>(
    DataAwsEc2LocalGatewayVirtualInterfaceGroups,
    idFilter,
    baseNode,
    optional,
  )
