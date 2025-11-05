import {
  type NodeProps,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
  Shape,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'

export const InputSchema = z.object({
  listener_arn: ResolvableStringSchema,
  priority: ResolvableNumberSchema,
  action: ResolvableRecordSchema.array().optional(),
  condition: ResolvableRecordSchema.array().optional(),
  tags: ResolvableRecordSchema.optional(),
})

export const OutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
})

export type InputProps =
  & z.output<
    typeof InputSchema
  >
  & NodeProps

export type OutputProps =
  & z.output<
    typeof OutputSchema
  >
  & InputProps

export function AwsLbListenerRule(props: InputProps) {
  const _importId = (node: any) => node._props.arn
  return (
    <Shape
      _importId={_importId}
      {...awsProps(
        props,
        InputSchema,
        OutputSchema,
      )}
    />
  )
}
