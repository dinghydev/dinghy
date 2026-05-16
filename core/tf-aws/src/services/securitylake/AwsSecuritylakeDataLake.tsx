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

export const AwsSecuritylakeDataLakeInputSchema = TfMetaSchema.extend({
  meta_store_manager_role_arn: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      encryption_configuration: z.object({
        kms_key_id: z.string(),
      }).array().optional(),
      region: z.string(),
      lifecycle_configuration: z.object({
        expiration: z.object({
          days: z.number().optional(),
        }).array().optional(),
        transition: z.object({
          days: z.number().optional(),
          storage_class: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      replication_configuration: z.object({
        regions: z.string().array().optional(),
        role_arn: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
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

export const AwsSecuritylakeDataLakeOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  s3_bucket_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSecuritylakeDataLakeImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSecuritylakeDataLakeInputProps =
  & z.input<typeof AwsSecuritylakeDataLakeInputSchema>
  & z.input<typeof AwsSecuritylakeDataLakeImportSchema>
  & NodeProps

export type AwsSecuritylakeDataLakeOutputProps =
  & z.output<typeof AwsSecuritylakeDataLakeOutputSchema>
  & z.output<typeof AwsSecuritylakeDataLakeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securitylake_data_lake

export function AwsSecuritylakeDataLake(
  props: Partial<AwsSecuritylakeDataLakeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_data_lake'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecuritylakeDataLakeInputSchema}
      _outputSchema={AwsSecuritylakeDataLakeOutputSchema}
      _importSchema={AwsSecuritylakeDataLakeImportSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeDataLake = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecuritylakeDataLakeOutputProps>(
    AwsSecuritylakeDataLake,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecuritylakeDataLakes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecuritylakeDataLakeOutputProps>(
    AwsSecuritylakeDataLake,
    idFilter,
    baseNode,
    optional,
  )
