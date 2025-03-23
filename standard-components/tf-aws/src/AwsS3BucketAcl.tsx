import {
  IacNodeProps,
  ResolvableBooleanSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from './index.js'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const AwsS3BucketAclInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  acl: ResolvableStringSchema.optional(),
})

export const AwsS3BucketAclOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type AwsS3BucketAclInputProps =
  & z.infer<typeof AwsS3BucketAclInputSchema>
  & IacNodeProps

export type AwsS3BucketAclOutputProps =
  & z.infer<typeof AwsS3BucketAclOutputSchema>
  & AwsS3BucketAclInputProps

export function AwsS3BucketAcl(
  props: AwsS3BucketAclInputProps,
) {
  return (
    <Shape
      {...aws(
        props,
        AwsS3BucketAclInputSchema,
        AwsS3BucketAclOutputSchema,
      )}
    />
  )
}
