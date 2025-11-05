import {
  type NodeProps,
  ResolvableStringSchema,
  useTypedNode,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'

export const InputSchema = z.object({
  name: ResolvableStringSchema,
  destination_arn: ResolvableStringSchema,
  filter_pattern: ResolvableStringSchema,
  log_container_name: ResolvableStringSchema,
  role_arn: ResolvableStringSchema.optional(),
  distribution: ResolvableStringSchema.optional(),
})

export const OutputSchema = z.object({})

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

export function AwsCloudwatchLogSubscriptionFilter(props: InputProps) {
  const _importId = (node: any) =>
    `${node._props.log_container_name}|${node._props.name}`
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

export const useAwsCloudwatchLogSubscriptionFilter = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCloudwatchLogSubscriptionFilter, node, id)
