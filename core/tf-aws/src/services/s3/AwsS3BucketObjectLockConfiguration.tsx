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

export const AwsS3BucketObjectLockConfigurationInputSchema = TfMetaSchema
  .extend({
    bucket: resolvableValue(z.string()),
    expected_bucket_owner: resolvableValue(z.string().optional()),
    object_lock_enabled: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    rule: resolvableValue(
      z.object({
        default_retention: z.object({
          days: z.number().optional(),
          mode: z.string().optional(),
          years: z.number().optional(),
        }),
      }).optional(),
    ),
    token: resolvableValue(z.string().optional()),
  })

export const AwsS3BucketObjectLockConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsS3BucketObjectLockConfigurationInputProps =
  & z.input<typeof AwsS3BucketObjectLockConfigurationInputSchema>
  & NodeProps

export type AwsS3BucketObjectLockConfigurationOutputProps =
  & z.output<typeof AwsS3BucketObjectLockConfigurationOutputSchema>
  & z.output<typeof AwsS3BucketObjectLockConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_object_lock_configuration

export function AwsS3BucketObjectLockConfiguration(
  props: Partial<AwsS3BucketObjectLockConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_object_lock_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketObjectLockConfigurationInputSchema}
      _outputSchema={AwsS3BucketObjectLockConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketObjectLockConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketObjectLockConfigurationOutputProps>(
    AwsS3BucketObjectLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketObjectLockConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketObjectLockConfigurationOutputProps>(
    AwsS3BucketObjectLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )
