import {
  type NodeProps,
  ResolvableRecordSchema,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
} from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'
// import { awsProps } from "@dinghy/tf-aws";

import z from 'zod'

export const InputSchema = z.object({
  name: ResolvableStringSchema,
  policy_type: ResolvableStringSchema,
  resource_id: ResolvableStringSchema,
  scalable_dimension: ResolvableStringSchema,
  service_namespace: ResolvableStringSchema,
  target_tracking_scaling_policy_configuration: ResolvableRecordSchema,
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
  & NodeProps

export type OutputProps =
  & z.output<
    typeof OutputSchema
  >
  & InputProps

export function AwsAppautoscalingPolicy(props: InputProps) {
  const _importId = (node: any) =>
    `${node._props.service_namespace}/${node._props.resource_id}/${node._props.scalable_dimension}/${node._props.name}`
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

export const useAwsAppautoscalingPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppautoscalingPolicy, node, id)
