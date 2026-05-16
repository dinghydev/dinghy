import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCloudwatchLogGroupsInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  log_group_name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudwatchLogGroupsOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  log_group_names: z.set(z.string()).optional(),
})

export type DataAwsCloudwatchLogGroupsInputProps =
  & z.input<typeof DataAwsCloudwatchLogGroupsInputSchema>
  & NodeProps

export type DataAwsCloudwatchLogGroupsOutputProps =
  & z.output<typeof DataAwsCloudwatchLogGroupsOutputSchema>
  & z.output<typeof DataAwsCloudwatchLogGroupsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudwatch_log_groups

export function DataAwsCloudwatchLogGroups(
  props: Partial<DataAwsCloudwatchLogGroupsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_groups'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudwatchLogGroupsInputSchema}
      _outputSchema={DataAwsCloudwatchLogGroupsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudwatchLogGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudwatchLogGroupsOutputProps>(
    DataAwsCloudwatchLogGroups,
    idFilter,
    baseNode,
    optional,
  )
