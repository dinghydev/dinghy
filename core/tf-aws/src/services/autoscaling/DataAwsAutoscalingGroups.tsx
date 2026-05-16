import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsAutoscalingGroupsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  names: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAutoscalingGroupsOutputSchema = z.object({
  arns: z.string().array().optional(),
  id: z.string().optional(),
  names: z.string().array().optional(),
})

export type DataAwsAutoscalingGroupsInputProps =
  & z.input<typeof DataAwsAutoscalingGroupsInputSchema>
  & NodeProps

export type DataAwsAutoscalingGroupsOutputProps =
  & z.output<typeof DataAwsAutoscalingGroupsOutputSchema>
  & z.output<typeof DataAwsAutoscalingGroupsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/autoscaling_groups

export function DataAwsAutoscalingGroups(
  props: Partial<DataAwsAutoscalingGroupsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_groups'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAutoscalingGroupsInputSchema}
      _outputSchema={DataAwsAutoscalingGroupsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAutoscalingGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAutoscalingGroupsOutputProps>(
    DataAwsAutoscalingGroups,
    idFilter,
    baseNode,
    optional,
  )
