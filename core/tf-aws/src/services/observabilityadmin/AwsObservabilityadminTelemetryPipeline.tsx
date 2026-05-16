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

export const AwsObservabilityadminTelemetryPipelineInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    configuration: resolvableValue(
      z.object({
        body: z.string(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsObservabilityadminTelemetryPipelineOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsObservabilityadminTelemetryPipelineImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsObservabilityadminTelemetryPipelineInputProps =
  & z.input<typeof AwsObservabilityadminTelemetryPipelineInputSchema>
  & z.input<typeof AwsObservabilityadminTelemetryPipelineImportSchema>
  & NodeProps

export type AwsObservabilityadminTelemetryPipelineOutputProps =
  & z.output<typeof AwsObservabilityadminTelemetryPipelineOutputSchema>
  & z.output<typeof AwsObservabilityadminTelemetryPipelineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/observabilityadmin_telemetry_pipeline

export function AwsObservabilityadminTelemetryPipeline(
  props: Partial<AwsObservabilityadminTelemetryPipelineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_observabilityadmin_telemetry_pipeline'
      _category='resource'
      _title={_title}
      _inputSchema={AwsObservabilityadminTelemetryPipelineInputSchema}
      _outputSchema={AwsObservabilityadminTelemetryPipelineOutputSchema}
      _importSchema={AwsObservabilityadminTelemetryPipelineImportSchema}
      {...props}
    />
  )
}

export const useAwsObservabilityadminTelemetryPipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsObservabilityadminTelemetryPipelineOutputProps>(
    AwsObservabilityadminTelemetryPipeline,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsObservabilityadminTelemetryPipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsObservabilityadminTelemetryPipelineOutputProps>(
    AwsObservabilityadminTelemetryPipeline,
    idFilter,
    baseNode,
    optional,
  )
