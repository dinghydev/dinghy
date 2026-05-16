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

export const AwsMqConfigurationInputSchema = TfMetaSchema.extend({
  data: resolvableValue(z.string()),
  engine_type: resolvableValue(z.string()),
  engine_version: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  authentication_strategy: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMqConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  latest_revision: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMqConfigurationInputProps =
  & z.input<typeof AwsMqConfigurationInputSchema>
  & NodeProps

export type AwsMqConfigurationOutputProps =
  & z.output<typeof AwsMqConfigurationOutputSchema>
  & z.output<typeof AwsMqConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/mq_configuration

export function AwsMqConfiguration(
  props: Partial<AwsMqConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mq_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMqConfigurationInputSchema}
      _outputSchema={AwsMqConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMqConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMqConfigurationOutputProps>(
    AwsMqConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMqConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMqConfigurationOutputProps>(
    AwsMqConfiguration,
    idFilter,
    baseNode,
    optional,
  )
