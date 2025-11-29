import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectUserHierarchyGroup } from './AwsConnectUserHierarchyGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_user_hierarchy_group

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  hierarchy_group_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsConnectUserHierarchyGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectUserHierarchyGroup
      _type='aws_connect_user_hierarchy_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectUserHierarchyGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsConnectUserHierarchyGroup, node, id)

export const useDataAwsConnectUserHierarchyGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsConnectUserHierarchyGroup, node, id)
