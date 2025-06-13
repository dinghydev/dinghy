import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const InputSchema = z.object({
  resource_arn: ResolvableStringSchema,
  web_acl_arn: ResolvableStringSchema,
})

export const OutputSchema = z.object({})

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

export function AwsWafv2WebAclAssociation(props: InputProps) {
  const _importId = (node: any) =>
    `${node._props.web_acl_arn},${node._props.resource_arn}`
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
