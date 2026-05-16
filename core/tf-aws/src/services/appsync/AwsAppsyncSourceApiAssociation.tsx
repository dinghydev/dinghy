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

export const AwsAppsyncSourceApiAssociationInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  merged_api_arn: resolvableValue(z.string().optional()),
  merged_api_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_api_arn: resolvableValue(z.string().optional()),
  source_api_association_config: resolvableValue(
    z.object({
      merge_type: z.string(),
    }).array().optional(),
  ),
  source_api_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsAppsyncSourceApiAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  association_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsAppsyncSourceApiAssociationInputProps =
  & z.input<typeof AwsAppsyncSourceApiAssociationInputSchema>
  & NodeProps

export type AwsAppsyncSourceApiAssociationOutputProps =
  & z.output<typeof AwsAppsyncSourceApiAssociationOutputSchema>
  & z.output<typeof AwsAppsyncSourceApiAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_source_api_association

export function AwsAppsyncSourceApiAssociation(
  props: Partial<AwsAppsyncSourceApiAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_source_api_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncSourceApiAssociationInputSchema}
      _outputSchema={AwsAppsyncSourceApiAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncSourceApiAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncSourceApiAssociationOutputProps>(
    AwsAppsyncSourceApiAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncSourceApiAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncSourceApiAssociationOutputProps>(
    AwsAppsyncSourceApiAssociation,
    idFilter,
    baseNode,
    optional,
  )
