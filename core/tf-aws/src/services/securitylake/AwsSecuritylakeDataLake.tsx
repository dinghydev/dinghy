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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  s3_bucket_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/securitylake_data_lake

export function AwsSecuritylakeDataLake(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_data_lake'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeDataLake = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSecuritylakeDataLake,
    idFilter,
    baseNode,
    optional,
  )
