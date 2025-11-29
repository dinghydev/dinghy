import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbParameterGroup } from './AwsMemorydbParameterGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/memorydb_parameter_group

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  family: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  parameter: z.object({
    name: z.string(),
    value: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMemorydbParameterGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMemorydbParameterGroup
      _type='aws_memorydb_parameter_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbParameterGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMemorydbParameterGroup, node, id)

export const useDataAwsMemorydbParameterGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMemorydbParameterGroup, node, id)
