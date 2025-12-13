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
  hierarchy_structure: resolvableValue(z.object({
    level_five: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_four: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_one: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_three: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_two: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
  })),
  instance_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  hierarchy_structure: z.object({
    level_five: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_four: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_one: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_three: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
    level_two: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).optional(),
  }).optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_user_hierarchy_structure

export function AwsConnectUserHierarchyStructure(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_user_hierarchy_structure'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectUserHierarchyStructure = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsConnectUserHierarchyStructure,
    idFilter,
    baseNode,
  )

export const useAwsConnectUserHierarchyStructures = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsConnectUserHierarchyStructure,
    idFilter,
    baseNode,
  )
