import {
  type IacNodeProps,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
} from '@diac/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'

export const InputSchema = z.object({
  name: ResolvableStringSchema,
  port: ResolvableNumberSchema,
  protocol: ResolvableStringSchema,
  vpc_id: ResolvableStringSchema,
  target_type: ResolvableStringSchema,
  deregistration_delay: ResolvableNumberSchema,
  health_check: ResolvableRecordSchema.optional(),
  stickiness: ResolvableRecordSchema.optional(),
})

export const OutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
  name: ResolvableStringSchema.optional(),
})

export type InputProps =
  & z.output<
    typeof InputSchema
  >
  & IacNodeProps

export type OutputProps =
  & z.output<
    typeof OutputSchema
  >
  & InputProps

export function AwsLbTargetGroup(props: InputProps) {
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

export const useAwsLbTargetGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLbTargetGroup, node, id)
