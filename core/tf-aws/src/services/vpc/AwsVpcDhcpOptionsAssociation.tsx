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

export const AwsVpcDhcpOptionsAssociationInputSchema = TfMetaSchema.extend({
  dhcp_options_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpcDhcpOptionsAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVpcDhcpOptionsAssociationInputProps =
  & z.input<typeof AwsVpcDhcpOptionsAssociationInputSchema>
  & NodeProps

export type AwsVpcDhcpOptionsAssociationOutputProps =
  & z.output<typeof AwsVpcDhcpOptionsAssociationOutputSchema>
  & z.output<typeof AwsVpcDhcpOptionsAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_dhcp_options_association

export function AwsVpcDhcpOptionsAssociation(
  props: Partial<AwsVpcDhcpOptionsAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_dhcp_options_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcDhcpOptionsAssociationInputSchema}
      _outputSchema={AwsVpcDhcpOptionsAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcDhcpOptionsAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcDhcpOptionsAssociationOutputProps>(
    AwsVpcDhcpOptionsAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcDhcpOptionsAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcDhcpOptionsAssociationOutputProps>(
    AwsVpcDhcpOptionsAssociation,
    idFilter,
    baseNode,
    optional,
  )
