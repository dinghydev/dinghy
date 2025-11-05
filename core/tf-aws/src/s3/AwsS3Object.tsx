import {
  deepResolve,
  type NodeProps,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode } from '@dinghy/base-components'
import { Bucket } from '@dinghy/diagrams/entitiesAwsStorage'

export const AwsS3ObjectInputSchema = z.object({
  bucket: ResolvableStringSchema.optional(),
  __key: ResolvableStringSchema.optional(),
  content: ResolvableStringSchema.optional(),
  content_base64: ResolvableStringSchema.optional(),
  content_type: ResolvableStringSchema.optional(),
  cache_control: ResolvableStringSchema.optional(),
})

export const AwsS3ObjectOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  version_id: ResolvableStringSchema.optional(),
  etag: ResolvableStringSchema.optional(),
})

export type AwsS3ObjectInputProps =
  & z.input<typeof AwsS3ObjectInputSchema>
  & NodeProps

export type AwsS3ObjectOutputProps =
  & z.output<typeof AwsS3ObjectOutputSchema>
  & AwsS3ObjectInputProps

export function AwsS3Object(props: AwsS3ObjectInputProps) {
  const _importId = (node: any) =>
    `${deepResolve(node, node._props, 'bucket')}/${node._props.__key}`
  return (
    <Bucket
      _importId={_importId}
      {...awsProps(props, AwsS3ObjectInputSchema, AwsS3ObjectOutputSchema)}
    />
  )
}
export const useAwsS3Object = (node?: any, id?: string) =>
  useTypedNode<AwsS3ObjectOutputProps>(AwsS3Object, node, id)
