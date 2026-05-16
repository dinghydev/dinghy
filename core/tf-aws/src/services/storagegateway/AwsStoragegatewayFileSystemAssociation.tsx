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

export const AwsStoragegatewayFileSystemAssociationInputSchema = TfMetaSchema
  .extend({
    gateway_arn: resolvableValue(z.string()),
    location_arn: resolvableValue(z.string()),
    password: resolvableValue(z.string()),
    username: resolvableValue(z.string()),
    audit_destination_arn: resolvableValue(z.string().optional()),
    cache_attributes: resolvableValue(
      z.object({
        cache_stale_timeout_in_seconds: z.number().optional(),
      }).optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsStoragegatewayFileSystemAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsStoragegatewayFileSystemAssociationInputProps =
  & z.input<typeof AwsStoragegatewayFileSystemAssociationInputSchema>
  & NodeProps

export type AwsStoragegatewayFileSystemAssociationOutputProps =
  & z.output<typeof AwsStoragegatewayFileSystemAssociationOutputSchema>
  & z.output<typeof AwsStoragegatewayFileSystemAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/storagegateway_file_system_association

export function AwsStoragegatewayFileSystemAssociation(
  props: Partial<AwsStoragegatewayFileSystemAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_file_system_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsStoragegatewayFileSystemAssociationInputSchema}
      _outputSchema={AwsStoragegatewayFileSystemAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayFileSystemAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsStoragegatewayFileSystemAssociationOutputProps>(
    AwsStoragegatewayFileSystemAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewayFileSystemAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsStoragegatewayFileSystemAssociationOutputProps>(
    AwsStoragegatewayFileSystemAssociation,
    idFilter,
    baseNode,
    optional,
  )
