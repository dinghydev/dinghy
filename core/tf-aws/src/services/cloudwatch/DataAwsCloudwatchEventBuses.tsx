import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCloudwatchEventBusesInputSchema = TfMetaSchema.extend({
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudwatchEventBusesOutputSchema = z.object({
  event_buses: z.object({
    arn: z.string(),
    creation_time: z.string(),
    description: z.string(),
    last_modified_time: z.string(),
    name: z.string(),
    policy: z.string(),
  }).array().optional(),
})

export type DataAwsCloudwatchEventBusesInputProps =
  & z.input<typeof DataAwsCloudwatchEventBusesInputSchema>
  & NodeProps

export type DataAwsCloudwatchEventBusesOutputProps =
  & z.output<typeof DataAwsCloudwatchEventBusesOutputSchema>
  & z.output<typeof DataAwsCloudwatchEventBusesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudwatch_event_buses

export function DataAwsCloudwatchEventBuses(
  props: Partial<DataAwsCloudwatchEventBusesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_buses'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudwatchEventBusesInputSchema}
      _outputSchema={DataAwsCloudwatchEventBusesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudwatchEventBusess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudwatchEventBusesOutputProps>(
    DataAwsCloudwatchEventBuses,
    idFilter,
    baseNode,
    optional,
  )
