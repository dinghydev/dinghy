import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbSubnetGroup } from './AwsMemorydbSubnetGroup.tsx'

export const DataAwsMemorydbSubnetGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMemorydbSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type DataAwsMemorydbSubnetGroupInputProps =
  & z.input<typeof DataAwsMemorydbSubnetGroupInputSchema>
  & NodeProps

export type DataAwsMemorydbSubnetGroupOutputProps =
  & z.output<typeof DataAwsMemorydbSubnetGroupOutputSchema>
  & z.output<typeof DataAwsMemorydbSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/memorydb_subnet_group

export function DataAwsMemorydbSubnetGroup(
  props: Partial<DataAwsMemorydbSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMemorydbSubnetGroup
      _type='aws_memorydb_subnet_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMemorydbSubnetGroupInputSchema}
      _outputSchema={DataAwsMemorydbSubnetGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMemorydbSubnetGroupOutputProps>(
    DataAwsMemorydbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMemorydbSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMemorydbSubnetGroupOutputProps>(
    DataAwsMemorydbSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
