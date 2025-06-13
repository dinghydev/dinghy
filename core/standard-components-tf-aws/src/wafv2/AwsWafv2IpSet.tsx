import {
  type IacNodeProps,
  ResolvableStringSchema,
  useTypedNode,
} from '@reactiac/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const InputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  scope: ResolvableStringSchema,
  ip_address_version: ResolvableStringSchema.optional(),
  addresses: ResolvableStringSchema.array().optional(),
})

export const OutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
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

export function AwsWafv2IpSet(props: InputProps) {
  const _importId = (node: any) =>
    `${node._props.id}/${node._props.name}/${node._props.scope}`
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

export const useAwsWafv2IpSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafv2IpSet, node, id)
