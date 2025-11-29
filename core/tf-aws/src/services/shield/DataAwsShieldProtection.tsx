import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsShieldProtection } from './AwsShieldProtection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/shield_protection

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  protection_id: resolvableValue(z.string().optional()),
  resource_arn: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  name: z.string().optional(),
  protection_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsShieldProtection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsShieldProtection
      _type='aws_shield_protection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsShieldProtection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsShieldProtection, node, id)

export const useDataAwsShieldProtections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsShieldProtection, node, id)
