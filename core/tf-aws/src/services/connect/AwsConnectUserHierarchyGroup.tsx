import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  parent_group_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  hierarchy_group_id: z.string().optional(),
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
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_user_hierarchy_group

export function AwsConnectUserHierarchyGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_user_hierarchy_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectUserHierarchyGroup = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsConnectUserHierarchyGroup, idFilter, baseNode)

export const useAwsConnectUserHierarchyGroups = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsConnectUserHierarchyGroup, idFilter, baseNode)
