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

export const AwsSesv2TenantResourceAssociationInputSchema = TfMetaSchema.extend(
  {
    resource_arn: resolvableValue(z.string()),
    tenant_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsSesv2TenantResourceAssociationOutputSchema = z.object({})

export type AwsSesv2TenantResourceAssociationInputProps =
  & z.input<typeof AwsSesv2TenantResourceAssociationInputSchema>
  & NodeProps

export type AwsSesv2TenantResourceAssociationOutputProps =
  & z.output<typeof AwsSesv2TenantResourceAssociationOutputSchema>
  & z.output<typeof AwsSesv2TenantResourceAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_tenant_resource_association

export function AwsSesv2TenantResourceAssociation(
  props: Partial<AwsSesv2TenantResourceAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_tenant_resource_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2TenantResourceAssociationInputSchema}
      _outputSchema={AwsSesv2TenantResourceAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2TenantResourceAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2TenantResourceAssociationOutputProps>(
    AwsSesv2TenantResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2TenantResourceAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2TenantResourceAssociationOutputProps>(
    AwsSesv2TenantResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )
