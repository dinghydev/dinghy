import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafv2WebAcl } from './AwsWafv2WebAcl.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/wafv2_web_acl

export const InputSchema = z.object({
  scope: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_arn: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsWafv2WebAcl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsWafv2WebAcl
      _type='aws_wafv2_web_acl'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafv2WebAcl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsWafv2WebAcl, node, id)

export const useDataAwsWafv2WebAcls = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsWafv2WebAcl, node, id)
