import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectUserHierarchyGroup } from './AwsConnectUserHierarchyGroup.tsx'

export const DataAwsConnectUserHierarchyGroupInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  hierarchy_group_id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsConnectUserHierarchyGroupOutputSchema = z.object({
  arn: z.string().optional(),
  hierarchy_path: z.object({
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
  level_id: z.string().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsConnectUserHierarchyGroupInputProps =
  & z.input<typeof DataAwsConnectUserHierarchyGroupInputSchema>
  & NodeProps

export type DataAwsConnectUserHierarchyGroupOutputProps =
  & z.output<typeof DataAwsConnectUserHierarchyGroupOutputSchema>
  & z.output<typeof DataAwsConnectUserHierarchyGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_user_hierarchy_group

export function DataAwsConnectUserHierarchyGroup(
  props: Partial<DataAwsConnectUserHierarchyGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectUserHierarchyGroup
      _type='aws_connect_user_hierarchy_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectUserHierarchyGroupInputSchema}
      _outputSchema={DataAwsConnectUserHierarchyGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectUserHierarchyGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectUserHierarchyGroupOutputProps>(
    DataAwsConnectUserHierarchyGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectUserHierarchyGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectUserHierarchyGroupOutputProps>(
    DataAwsConnectUserHierarchyGroup,
    idFilter,
    baseNode,
    optional,
  )
