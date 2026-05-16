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

export const AwsApprunnerObservabilityConfigurationInputSchema = TfMetaSchema
  .extend({
    observability_configuration_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    trace_configuration: resolvableValue(
      z.object({
        vendor: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsApprunnerObservabilityConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  latest: z.boolean().optional(),
  observability_configuration_revision: z.number().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsApprunnerObservabilityConfigurationImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsApprunnerObservabilityConfigurationInputProps =
  & z.input<typeof AwsApprunnerObservabilityConfigurationInputSchema>
  & z.input<typeof AwsApprunnerObservabilityConfigurationImportSchema>
  & NodeProps

export type AwsApprunnerObservabilityConfigurationOutputProps =
  & z.output<typeof AwsApprunnerObservabilityConfigurationOutputSchema>
  & z.output<typeof AwsApprunnerObservabilityConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_observability_configuration

export function AwsApprunnerObservabilityConfiguration(
  props: Partial<AwsApprunnerObservabilityConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_observability_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerObservabilityConfigurationInputSchema}
      _outputSchema={AwsApprunnerObservabilityConfigurationOutputSchema}
      _importSchema={AwsApprunnerObservabilityConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerObservabilityConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerObservabilityConfigurationOutputProps>(
    AwsApprunnerObservabilityConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerObservabilityConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerObservabilityConfigurationOutputProps>(
    AwsApprunnerObservabilityConfiguration,
    idFilter,
    baseNode,
    optional,
  )
