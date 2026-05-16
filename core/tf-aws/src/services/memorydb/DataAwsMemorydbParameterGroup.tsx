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

export const DataAwsMemorydbParameterGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMemorydbParameterGroupOutputSchema = z.object({
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

export type DataAwsMemorydbParameterGroupInputProps =
  & z.input<typeof DataAwsMemorydbParameterGroupInputSchema>
  & NodeProps

export type DataAwsMemorydbParameterGroupOutputProps =
  & z.output<typeof DataAwsMemorydbParameterGroupOutputSchema>
  & z.output<typeof DataAwsMemorydbParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/memorydb_parameter_group

export function DataAwsMemorydbParameterGroup(
  props: Partial<DataAwsMemorydbParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMemorydbParameterGroup
      _type='aws_memorydb_parameter_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMemorydbParameterGroupInputSchema}
      _outputSchema={DataAwsMemorydbParameterGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMemorydbParameterGroupOutputProps>(
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
  useTypedNodes<DataAwsMemorydbParameterGroupOutputProps>(
    DataAwsMemorydbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
