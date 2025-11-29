import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3Bucket } from './AwsS3Bucket.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/s3_bucket

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bucket_domain_name: z.string().optional(),
  bucket_region: z.string().optional(),
  bucket_regional_domain_name: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  website_domain: z.string().optional(),
  website_endpoint: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsS3Bucket(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsS3Bucket
      _type='aws_s3_bucket'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3Bucket = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsS3Bucket, node, id)

export const useDataAwsS3Buckets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsS3Bucket, node, id)
