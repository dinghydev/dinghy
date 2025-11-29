import {
  type NodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'

import z from 'zod'
import { Shape } from '@dinghy/base-components'

export const InputSchema = z.object({
  resource_arn: ResolvableStringSchema,
  log_destination_configs: ResolvableStringArraySchema,
})

export const OutputSchema = z.object({
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

export function AwsWafv2WebAclLoggingConfiguration(props: InputProps) {
  const _importId = (node: any) => node._props.resource_arn
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
