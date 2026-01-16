import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbParameterGroup } from './AwsMemorydbParameterGroup.tsx'

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  family: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  parameter: z.set(z.object({
    name: z.string(),
    value: z.string(),
  })).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/memorydb_parameter_group

export function DataAwsMemorydbParameterGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsMemorydbParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsMemorydbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMemorydbParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsMemorydbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
