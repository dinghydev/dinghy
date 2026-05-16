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

export const AwsPlacementGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  strategy: resolvableValue(z.string()),
  partition_count: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  spread_level: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsPlacementGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  placement_group_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsPlacementGroupInputProps =
  & z.input<typeof AwsPlacementGroupInputSchema>
  & NodeProps

export type AwsPlacementGroupOutputProps =
  & z.output<typeof AwsPlacementGroupOutputSchema>
  & z.output<typeof AwsPlacementGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/placement_group

export function AwsPlacementGroup(props: Partial<AwsPlacementGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_placement_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPlacementGroupInputSchema}
      _outputSchema={AwsPlacementGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsPlacementGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPlacementGroupOutputProps>(
    AwsPlacementGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPlacementGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPlacementGroupOutputProps>(
    AwsPlacementGroup,
    idFilter,
    baseNode,
    optional,
  )
