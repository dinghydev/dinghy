import {
  type IacNodeProps,
  ResolvableRecordSchema,
  ResolvableStringSchema,
  useTypedNode,
} from '@reactiac/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'
import { Waf } from '@reactiac/standard-components-diagrams/awsSecurityIdentityCompliance'

export const InputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  name_prefix: ResolvableStringSchema.optional(),
  scope: ResolvableStringSchema,
  default_action: ResolvableRecordSchema.optional(),
  visibility_config: ResolvableRecordSchema.optional(),
  rule: ResolvableRecordSchema.array().optional(),
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

export function AwsWafv2WebAcl(props: InputProps) {
  const _importId = (node: any) =>
    `${node._props.id}/${node._props.name}/${node._props.scope}`
  return (
    <Waf
      _importId={_importId}
      {...awsProps(
        props,
        InputSchema,
        OutputSchema,
      )}
    />
  )
}

export const useAwsWafv2WebAcl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafv2WebAcl, node, id)
