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

export const AwsNetworkmanagerLinkAssociationInputSchema = TfMetaSchema.extend({
  device_id: resolvableValue(z.string()),
  global_network_id: resolvableValue(z.string()),
  link_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkmanagerLinkAssociationOutputSchema = z.object({})

export type AwsNetworkmanagerLinkAssociationInputProps =
  & z.input<typeof AwsNetworkmanagerLinkAssociationInputSchema>
  & NodeProps

export type AwsNetworkmanagerLinkAssociationOutputProps =
  & z.output<typeof AwsNetworkmanagerLinkAssociationOutputSchema>
  & z.output<typeof AwsNetworkmanagerLinkAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_link_association

export function AwsNetworkmanagerLinkAssociation(
  props: Partial<AwsNetworkmanagerLinkAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_link_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerLinkAssociationInputSchema}
      _outputSchema={AwsNetworkmanagerLinkAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerLinkAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerLinkAssociationOutputProps>(
    AwsNetworkmanagerLinkAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerLinkAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerLinkAssociationOutputProps>(
    AwsNetworkmanagerLinkAssociation,
    idFilter,
    baseNode,
    optional,
  )
