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

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3_bucket_object_lock_configuration

export function AwsS3BucketObjectLockConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_object_lock_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketObjectLockConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsS3BucketObjectLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )
