import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEksNodeGroupsInputSchema = TfMetaSchema.extend({
  cluster_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEksNodeGroupsOutputSchema = z.object({
  id: z.string().optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsEksNodeGroupsInputProps =
  & z.input<typeof DataAwsEksNodeGroupsInputSchema>
  & NodeProps

export type DataAwsEksNodeGroupsOutputProps =
  & z.output<typeof DataAwsEksNodeGroupsOutputSchema>
  & z.output<typeof DataAwsEksNodeGroupsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eks_node_groups

export function DataAwsEksNodeGroups(
  props: Partial<DataAwsEksNodeGroupsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_node_groups'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEksNodeGroupsInputSchema}
      _outputSchema={DataAwsEksNodeGroupsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEksNodeGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEksNodeGroupsOutputProps>(
    DataAwsEksNodeGroups,
    idFilter,
    baseNode,
    optional,
  )
