import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpclatticeResourcePolicy } from './AwsVpclatticeResourcePolicy.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpclattice_resource_policy

export const InputSchema = z.object({
  resource_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  policy: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsVpclatticeResourcePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsVpclatticeResourcePolicy
      _type='aws_vpclattice_resource_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpclatticeResourcePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsVpclatticeResourcePolicy, node, id)

export const useDataAwsVpclatticeResourcePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsVpclatticeResourcePolicy, node, id)
