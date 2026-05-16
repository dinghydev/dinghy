import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsCloudwatchEventBusInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  dead_letter_config: resolvableValue(
    z.object({
      arn: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  event_source_name: resolvableValue(z.string().optional()),
  kms_key_identifier: resolvableValue(z.string().optional()),
  log_config: resolvableValue(
    z.object({
      include_detail: z.string().optional(),
      level: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudwatchEventBusOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchEventBusInputProps =
  & z.input<typeof AwsCloudwatchEventBusInputSchema>
  & NodeProps

export type AwsCloudwatchEventBusOutputProps =
  & z.output<typeof AwsCloudwatchEventBusOutputSchema>
  & z.output<typeof AwsCloudwatchEventBusInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_event_bus

export function AwsCloudwatchEventBus(
  props: Partial<AwsCloudwatchEventBusInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_bus'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchEventBusInputSchema}
      _outputSchema={AwsCloudwatchEventBusOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventBuss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchEventBusOutputProps>(
    AwsCloudwatchEventBus,
    idFilter,
    baseNode,
    optional,
  )
