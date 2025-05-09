import {
  deepResolve,
  type IacNodeProps,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const AwsS3BucketVersioningInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  versioning_configuration: ResolvableRecordSchema.optional(),
})

export const AwsS3BucketVersioningOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export type AwsS3BucketVersioningInputProps =
  & z.output<
    typeof AwsS3BucketVersioningInputSchema
  >
  & IacNodeProps

export type AwsS3BucketVersioningOutputProps =
  & z.output<
    typeof AwsS3BucketVersioningOutputSchema
  >
  & AwsS3BucketVersioningInputProps

export function importId(props: AwsS3BucketVersioningOutputProps) {
  return `${props.bucket}`
}

export function AwsS3BucketVersioning(props: AwsS3BucketVersioningInputProps) {
  const _importId = (node: any) => deepResolve(node, node._props, 'bucket')
  return (
    <Shape
      _importId={_importId}
      {...awsProps(
        props,
        AwsS3BucketVersioningInputSchema,
        AwsS3BucketVersioningOutputSchema,
      )}
    />
  )
}
