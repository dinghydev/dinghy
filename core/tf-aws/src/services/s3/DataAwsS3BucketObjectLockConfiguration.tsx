import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3BucketObjectLockConfiguration } from './AwsS3BucketObjectLockConfiguration.tsx'

export const InputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  object_lock_enabled: z.string().optional(),
  rule: z.object({
    default_retention: z.object({
      days: z.number(),
      mode: z.string(),
      years: z.number(),
    }).array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_bucket_object_lock_configuration

export function DataAwsS3BucketObjectLockConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3BucketObjectLockConfiguration
      _type='aws_s3_bucket_object_lock_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3BucketObjectLockConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsS3BucketObjectLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3BucketObjectLockConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsS3BucketObjectLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )
