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

export const AwsNetworkmanagerPrefixListAssociationInputSchema = TfMetaSchema
  .extend({
    core_network_id: resolvableValue(z.string()),
    prefix_list_alias: resolvableValue(z.string()),
    prefix_list_arn: resolvableValue(z.string()),
  })

export const AwsNetworkmanagerPrefixListAssociationOutputSchema = z.object({})

export const AwsNetworkmanagerPrefixListAssociationImportSchema = z.object({
  core_network_id: resolvableValue(z.string()),
  prefix_list_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsNetworkmanagerPrefixListAssociationInputProps =
  & z.input<typeof AwsNetworkmanagerPrefixListAssociationInputSchema>
  & z.input<typeof AwsNetworkmanagerPrefixListAssociationImportSchema>
  & NodeProps

export type AwsNetworkmanagerPrefixListAssociationOutputProps =
  & z.output<typeof AwsNetworkmanagerPrefixListAssociationOutputSchema>
  & z.output<typeof AwsNetworkmanagerPrefixListAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_prefix_list_association

export function AwsNetworkmanagerPrefixListAssociation(
  props: Partial<AwsNetworkmanagerPrefixListAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_prefix_list_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerPrefixListAssociationInputSchema}
      _outputSchema={AwsNetworkmanagerPrefixListAssociationOutputSchema}
      _importSchema={AwsNetworkmanagerPrefixListAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerPrefixListAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerPrefixListAssociationOutputProps>(
    AwsNetworkmanagerPrefixListAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerPrefixListAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerPrefixListAssociationOutputProps>(
    AwsNetworkmanagerPrefixListAssociation,
    idFilter,
    baseNode,
    optional,
  )
