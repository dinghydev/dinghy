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

export const AwsS3BucketServerSideEncryptionConfigurationInputSchema =
  TfMetaSchema.extend({
    bucket: resolvableValue(z.string()),
    rule: resolvableValue(
      z.object({
        blocked_encryption_types: z.string().array().optional(),
        bucket_key_enabled: z.boolean().optional(),
        apply_server_side_encryption_by_default: z.object({
          kms_master_key_id: z.string().optional(),
          sse_algorithm: z.string(),
        }).optional(),
      }).array(),
    ),
    expected_bucket_owner: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsS3BucketServerSideEncryptionConfigurationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export const AwsS3BucketServerSideEncryptionConfigurationImportSchema = z
  .object({
    bucket: resolvableValue(z.string()),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export type AwsS3BucketServerSideEncryptionConfigurationInputProps =
  & z.input<typeof AwsS3BucketServerSideEncryptionConfigurationInputSchema>
  & z.input<typeof AwsS3BucketServerSideEncryptionConfigurationImportSchema>
  & NodeProps

export type AwsS3BucketServerSideEncryptionConfigurationOutputProps =
  & z.output<typeof AwsS3BucketServerSideEncryptionConfigurationOutputSchema>
  & z.output<typeof AwsS3BucketServerSideEncryptionConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_server_side_encryption_configuration

export function AwsS3BucketServerSideEncryptionConfiguration(
  props: Partial<AwsS3BucketServerSideEncryptionConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_server_side_encryption_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketServerSideEncryptionConfigurationInputSchema}
      _outputSchema={AwsS3BucketServerSideEncryptionConfigurationOutputSchema}
      _importSchema={AwsS3BucketServerSideEncryptionConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketServerSideEncryptionConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketServerSideEncryptionConfigurationOutputProps>(
    AwsS3BucketServerSideEncryptionConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketServerSideEncryptionConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketServerSideEncryptionConfigurationOutputProps>(
    AwsS3BucketServerSideEncryptionConfiguration,
    idFilter,
    baseNode,
    optional,
  )
