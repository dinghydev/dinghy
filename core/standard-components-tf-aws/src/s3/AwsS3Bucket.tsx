import {
  type IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { aws4 } from '../../../standard-components-diagrams/src/index.ts'
import { useTypedNode } from '@reactiac/base-components'

export const AwsS3BucketInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  bucket_prefix: ResolvableStringSchema.optional(),
  force_destroy: ResolvableBooleanSchema.optional().default(false),
  object_lock_enabled: ResolvableBooleanSchema.optional().default(false),
})

export const AwsS3BucketOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
  bucket_domain_name: ResolvableStringSchema.optional(),
  bucket_regional_domain_name: ResolvableStringSchema.optional(),
  hosted_zone_id: ResolvableStringSchema.optional(),
  region: ResolvableStringSchema.optional(),
})

export type AwsS3BucketInputProps =
  & z.input<typeof AwsS3BucketInputSchema>
  & IacNodeProps

export type AwsS3BucketOutputProps =
  & z.output<typeof AwsS3BucketOutputSchema>
  & AwsS3BucketInputProps

export function AwsS3Bucket(props: AwsS3BucketInputProps) {
  const _importId = (node: any) => node._props.bucket
  return (
    <aws4.Bucket
      _importId={_importId}
      {...awsProps(props, AwsS3BucketInputSchema, AwsS3BucketOutputSchema)}
    />
  )
}
export const useAwsS3Bucket = (node?: any, id?: string) =>
  useTypedNode<AwsS3BucketOutputProps>(AwsS3Bucket, node, id)
