import {
  deepResolve,
  type IacNodeProps,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'

import z from 'zod'
import { Shape } from '@dinghy/base-components'

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
    `${deepResolve(node, node._props, 'web_acl_arn')},${
      deepResolve(node, node._props, 'resource_arn')
    }`
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
