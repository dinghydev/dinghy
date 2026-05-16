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

export const DataAwsCloudwatchEventSourceInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudwatchEventSourceOutputSchema = z.object({
  arn: z.string().optional(),
  created_by: z.string().optional(),
  name: z.string().optional(),
  state: z.string().optional(),
})

export type DataAwsCloudwatchEventSourceInputProps =
  & z.input<typeof DataAwsCloudwatchEventSourceInputSchema>
  & NodeProps

export type DataAwsCloudwatchEventSourceOutputProps =
  & z.output<typeof DataAwsCloudwatchEventSourceOutputSchema>
  & z.output<typeof DataAwsCloudwatchEventSourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudwatch_event_source

export function DataAwsCloudwatchEventSource(
  props: Partial<DataAwsCloudwatchEventSourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_source'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudwatchEventSourceInputSchema}
      _outputSchema={DataAwsCloudwatchEventSourceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudwatchEventSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudwatchEventSourceOutputProps>(
    DataAwsCloudwatchEventSource,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudwatchEventSources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudwatchEventSourceOutputProps>(
    DataAwsCloudwatchEventSource,
    idFilter,
    baseNode,
    optional,
  )
