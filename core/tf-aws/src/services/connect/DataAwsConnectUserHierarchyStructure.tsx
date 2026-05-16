import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectUserHierarchyStructure } from './AwsConnectUserHierarchyStructure.tsx'

export const DataAwsConnectUserHierarchyStructureInputSchema = TfMetaSchema
  .extend({
    instance_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsConnectUserHierarchyStructureOutputSchema = z.object({
  hierarchy_structure: z.object({
    level_five: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    level_four: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    level_one: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    level_three: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
    level_two: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsConnectUserHierarchyStructureInputProps =
  & z.input<typeof DataAwsConnectUserHierarchyStructureInputSchema>
  & NodeProps

export type DataAwsConnectUserHierarchyStructureOutputProps =
  & z.output<typeof DataAwsConnectUserHierarchyStructureOutputSchema>
  & z.output<typeof DataAwsConnectUserHierarchyStructureInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_user_hierarchy_structure

export function DataAwsConnectUserHierarchyStructure(
  props: Partial<DataAwsConnectUserHierarchyStructureInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectUserHierarchyStructure
      _type='aws_connect_user_hierarchy_structure'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectUserHierarchyStructureInputSchema}
      _outputSchema={DataAwsConnectUserHierarchyStructureOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectUserHierarchyStructure = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectUserHierarchyStructureOutputProps>(
    DataAwsConnectUserHierarchyStructure,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectUserHierarchyStructures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectUserHierarchyStructureOutputProps>(
    DataAwsConnectUserHierarchyStructure,
    idFilter,
    baseNode,
    optional,
  )
