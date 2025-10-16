import {
  type IacNodeProps,
  ResolvableNumberSchema,
  ResolvableStringSchema,
  useTypedNode,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'

export const InputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  name_prefix: ResolvableStringSchema.optional(),
  retention_in_days: ResolvableNumberSchema.optional(),
})

export const OutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
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

export function AwsCloudwatchLogGroup(props: InputProps) {
  const _importId = (node: any) => node._props.name
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

export const useAwsCloudwatchLogGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudwatchLogGroup, node, id)
