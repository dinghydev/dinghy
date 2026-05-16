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

export const AwsServicecatalogTagOptionResourceAssociationInputSchema =
  TfMetaSchema.extend({
    resource_id: resolvableValue(z.string()),
    tag_option_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsServicecatalogTagOptionResourceAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
    resource_arn: z.string().optional(),
    resource_created_time: z.string().optional(),
    resource_description: z.string().optional(),
    resource_name: z.string().optional(),
  })

export type AwsServicecatalogTagOptionResourceAssociationInputProps =
  & z.input<typeof AwsServicecatalogTagOptionResourceAssociationInputSchema>
  & NodeProps

export type AwsServicecatalogTagOptionResourceAssociationOutputProps =
  & z.output<typeof AwsServicecatalogTagOptionResourceAssociationOutputSchema>
  & z.output<typeof AwsServicecatalogTagOptionResourceAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_tag_option_resource_association

export function AwsServicecatalogTagOptionResourceAssociation(
  props: Partial<AwsServicecatalogTagOptionResourceAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_tag_option_resource_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogTagOptionResourceAssociationInputSchema}
      _outputSchema={AwsServicecatalogTagOptionResourceAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogTagOptionResourceAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogTagOptionResourceAssociationOutputProps>(
    AwsServicecatalogTagOptionResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogTagOptionResourceAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogTagOptionResourceAssociationOutputProps>(
    AwsServicecatalogTagOptionResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )
