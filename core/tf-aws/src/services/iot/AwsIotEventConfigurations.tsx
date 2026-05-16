import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIotEventConfigurationsInputSchema = TfMetaSchema.extend({
  event_configurations: resolvableValue(z.record(z.string(), z.boolean())),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsIotEventConfigurationsOutputSchema = z.object({})

export type AwsIotEventConfigurationsInputProps =
  & z.input<typeof AwsIotEventConfigurationsInputSchema>
  & NodeProps

export type AwsIotEventConfigurationsOutputProps =
  & z.output<typeof AwsIotEventConfigurationsOutputSchema>
  & z.output<typeof AwsIotEventConfigurationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_event_configurations

export function AwsIotEventConfigurations(
  props: Partial<AwsIotEventConfigurationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_event_configurations'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotEventConfigurationsInputSchema}
      _outputSchema={AwsIotEventConfigurationsOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotEventConfigurationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotEventConfigurationsOutputProps>(
    AwsIotEventConfigurations,
    idFilter,
    baseNode,
    optional,
  )
