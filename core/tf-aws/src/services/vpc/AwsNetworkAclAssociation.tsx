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

export const AwsNetworkAclAssociationInputSchema = TfMetaSchema.extend({
  network_acl_id: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsNetworkAclAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsNetworkAclAssociationInputProps =
  & z.input<typeof AwsNetworkAclAssociationInputSchema>
  & NodeProps

export type AwsNetworkAclAssociationOutputProps =
  & z.output<typeof AwsNetworkAclAssociationOutputSchema>
  & z.output<typeof AwsNetworkAclAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/network_acl_association

export function AwsNetworkAclAssociation(
  props: Partial<AwsNetworkAclAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_acl_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkAclAssociationInputSchema}
      _outputSchema={AwsNetworkAclAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkAclAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkAclAssociationOutputProps>(
    AwsNetworkAclAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkAclAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkAclAssociationOutputProps>(
    AwsNetworkAclAssociation,
    idFilter,
    baseNode,
    optional,
  )
