import {
  type IacNodeProps,
  ResolvableNumberSchema,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'

export const InputSchema = z.object({
  min_capacity: ResolvableNumberSchema,
  max_capacity: ResolvableNumberSchema,
  resource_id: ResolvableStringSchema,
  scalable_dimension: ResolvableStringSchema,
  service_namespace: ResolvableStringSchema,
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

export function AwsAppautoscalingTarget(props: InputProps) {
  const _importId = (node: any) =>
    `${node._props.service_namespace}/${node._props.resource_id}/${node._props.scalable_dimension}`
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

export const useAwsAppautoscalingTarget = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppautoscalingTarget, node, id)
