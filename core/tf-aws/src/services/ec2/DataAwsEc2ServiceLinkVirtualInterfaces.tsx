import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2ServiceLinkVirtualInterfacesInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const DataAwsEc2ServiceLinkVirtualInterfacesOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsEc2ServiceLinkVirtualInterfacesInputProps =
  & z.input<typeof DataAwsEc2ServiceLinkVirtualInterfacesInputSchema>
  & NodeProps

export type DataAwsEc2ServiceLinkVirtualInterfacesOutputProps =
  & z.output<typeof DataAwsEc2ServiceLinkVirtualInterfacesOutputSchema>
  & z.output<typeof DataAwsEc2ServiceLinkVirtualInterfacesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces

export function DataAwsEc2ServiceLinkVirtualInterfaces(
  props: Partial<DataAwsEc2ServiceLinkVirtualInterfacesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_service_link_virtual_interfaces'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2ServiceLinkVirtualInterfacesInputSchema}
      _outputSchema={DataAwsEc2ServiceLinkVirtualInterfacesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2ServiceLinkVirtualInterfacess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2ServiceLinkVirtualInterfacesOutputProps>(
    DataAwsEc2ServiceLinkVirtualInterfaces,
    idFilter,
    baseNode,
    optional,
  )
