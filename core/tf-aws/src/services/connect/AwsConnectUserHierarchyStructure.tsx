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

export const AwsConnectUserHierarchyStructureInputSchema = TfMetaSchema.extend({
  hierarchy_structure: resolvableValue(z.object({
    level_five: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_four: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_one: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_three: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_two: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
  })),
  instance_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsConnectUserHierarchyStructureOutputSchema = z.object({
  hierarchy_structure: z.object({
    level_five: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_four: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_one: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_three: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
    level_two: z.object({
      arn: z.string().optional(),
      id: z.string().optional(),
      name: z.string(),
    }).optional(),
  }).optional(),
  id: z.string().optional(),
})

export type AwsConnectUserHierarchyStructureInputProps =
  & z.input<typeof AwsConnectUserHierarchyStructureInputSchema>
  & NodeProps

export type AwsConnectUserHierarchyStructureOutputProps =
  & z.output<typeof AwsConnectUserHierarchyStructureOutputSchema>
  & z.output<typeof AwsConnectUserHierarchyStructureInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_user_hierarchy_structure

export function AwsConnectUserHierarchyStructure(
  props: Partial<AwsConnectUserHierarchyStructureInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_user_hierarchy_structure'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectUserHierarchyStructureInputSchema}
      _outputSchema={AwsConnectUserHierarchyStructureOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectUserHierarchyStructure = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectUserHierarchyStructureOutputProps>(
    AwsConnectUserHierarchyStructure,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectUserHierarchyStructures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectUserHierarchyStructureOutputProps>(
    AwsConnectUserHierarchyStructure,
    idFilter,
    baseNode,
    optional,
  )
