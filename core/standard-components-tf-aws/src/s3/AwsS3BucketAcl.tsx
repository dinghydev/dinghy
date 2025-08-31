import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@diac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@diac/base-components'

export const AwsS3BucketAclInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  acl: ResolvableStringSchema.optional(),
})

export const AwsS3BucketAclOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type AwsS3BucketAclInputProps =
  & z.output<
    typeof AwsS3BucketAclInputSchema
  >
  & IacNodeProps

export type AwsS3BucketAclOutputProps =
  & z.output<
    typeof AwsS3BucketAclOutputSchema
  >
  & AwsS3BucketAclInputProps

export function AwsS3BucketAcl(props: AwsS3BucketAclInputProps) {
  return (
    <Shape
      {...awsProps(
        props,
        AwsS3BucketAclInputSchema,
        AwsS3BucketAclOutputSchema,
      )}
    />
  )
}
