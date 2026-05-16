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

export const DataAwsEc2LocalGatewayVirtualInterfaceGroupInputSchema =
  TfMetaSchema.extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    local_gateway_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsEc2LocalGatewayVirtualInterfaceGroupOutputSchema = z.object(
  {
    local_gateway_virtual_interface_ids: z.set(z.string()).optional(),
  },
)

export type DataAwsEc2LocalGatewayVirtualInterfaceGroupInputProps =
  & z.input<typeof DataAwsEc2LocalGatewayVirtualInterfaceGroupInputSchema>
  & NodeProps

export type DataAwsEc2LocalGatewayVirtualInterfaceGroupOutputProps =
  & z.output<typeof DataAwsEc2LocalGatewayVirtualInterfaceGroupOutputSchema>
  & z.output<typeof DataAwsEc2LocalGatewayVirtualInterfaceGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_local_gateway_virtual_interface_group

export function DataAwsEc2LocalGatewayVirtualInterfaceGroup(
  props: Partial<DataAwsEc2LocalGatewayVirtualInterfaceGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_virtual_interface_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2LocalGatewayVirtualInterfaceGroupInputSchema}
      _outputSchema={DataAwsEc2LocalGatewayVirtualInterfaceGroupOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2LocalGatewayVirtualInterfaceGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2LocalGatewayVirtualInterfaceGroupOutputProps>(
    DataAwsEc2LocalGatewayVirtualInterfaceGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2LocalGatewayVirtualInterfaceGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2LocalGatewayVirtualInterfaceGroupOutputProps>(
    DataAwsEc2LocalGatewayVirtualInterfaceGroup,
    idFilter,
    baseNode,
    optional,
  )
