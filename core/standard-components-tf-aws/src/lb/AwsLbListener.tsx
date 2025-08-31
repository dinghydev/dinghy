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
  load_balancer_arn: ResolvableStringSchema,
  port: ResolvableNumberSchema,
  protocol: ResolvableStringSchema,
  certificate_arn: ResolvableStringSchema.optional(),
  ssl_policy: ResolvableStringSchema.optional(),
  default_action: ResolvableRecordSchema.optional(),
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

export function AwsLbListener(props: InputProps) {
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

export const useAwsLbListener = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLbListener, node, id)
