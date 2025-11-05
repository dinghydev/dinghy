import {
  type NodeProps,
  ResolvableBooleanSchema,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
  Shape,
  useTypedNode,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'

export const InputSchema = z.object({
  name: ResolvableStringSchema,
  enable_deletion_protection: ResolvableBooleanSchema.default(true),
  idle_timeout: ResolvableNumberSchema.default(600),
  security_containers: ResolvableStringArraySchema.optional(),
  subnets: ResolvableStringArraySchema.optional(),
  access_logs: ResolvableRecordSchema.optional(),
})

export const OutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
  dns_name: ResolvableStringSchema.optional(),
  zone_id: ResolvableStringSchema.optional(),
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

export function AwsLb(props: InputProps) {
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

export const useAwsLb = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLb, node, id)
