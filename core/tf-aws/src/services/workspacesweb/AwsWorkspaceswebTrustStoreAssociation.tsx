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

export const AwsWorkspaceswebTrustStoreAssociationInputSchema = TfMetaSchema
  .extend({
    portal_arn: resolvableValue(z.string()),
    trust_store_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWorkspaceswebTrustStoreAssociationOutputSchema = z.object({})

export type AwsWorkspaceswebTrustStoreAssociationInputProps =
  & z.input<typeof AwsWorkspaceswebTrustStoreAssociationInputSchema>
  & NodeProps

export type AwsWorkspaceswebTrustStoreAssociationOutputProps =
  & z.output<typeof AwsWorkspaceswebTrustStoreAssociationOutputSchema>
  & z.output<typeof AwsWorkspaceswebTrustStoreAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_trust_store_association

export function AwsWorkspaceswebTrustStoreAssociation(
  props: Partial<AwsWorkspaceswebTrustStoreAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_trust_store_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebTrustStoreAssociationInputSchema}
      _outputSchema={AwsWorkspaceswebTrustStoreAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebTrustStoreAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebTrustStoreAssociationOutputProps>(
    AwsWorkspaceswebTrustStoreAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebTrustStoreAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebTrustStoreAssociationOutputProps>(
    AwsWorkspaceswebTrustStoreAssociation,
    idFilter,
    baseNode,
    optional,
  )
