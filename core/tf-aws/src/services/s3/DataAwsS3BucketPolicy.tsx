import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3BucketPolicy } from './AwsS3BucketPolicy.tsx'

export const DataAwsS3BucketPolicyInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3BucketPolicyOutputSchema = z.object({
  policy: z.string().optional(),
})

export type DataAwsS3BucketPolicyInputProps =
  & z.input<typeof DataAwsS3BucketPolicyInputSchema>
  & NodeProps

export type DataAwsS3BucketPolicyOutputProps =
  & z.output<typeof DataAwsS3BucketPolicyOutputSchema>
  & z.output<typeof DataAwsS3BucketPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_bucket_policy

export function DataAwsS3BucketPolicy(
  props: Partial<DataAwsS3BucketPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3BucketPolicy
      _type='aws_s3_bucket_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3BucketPolicyInputSchema}
      _outputSchema={DataAwsS3BucketPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3BucketPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3BucketPolicyOutputProps>(
    DataAwsS3BucketPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3BucketPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3BucketPolicyOutputProps>(
    DataAwsS3BucketPolicy,
    idFilter,
    baseNode,
    optional,
  )
