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

export const AwsObservabilityadminTelemetryEnrichmentInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsObservabilityadminTelemetryEnrichmentOutputSchema = z.object({
  aws_resource_explorer_managed_view_arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsObservabilityadminTelemetryEnrichmentInputProps =
  & z.input<typeof AwsObservabilityadminTelemetryEnrichmentInputSchema>
  & NodeProps

export type AwsObservabilityadminTelemetryEnrichmentOutputProps =
  & z.output<typeof AwsObservabilityadminTelemetryEnrichmentOutputSchema>
  & z.output<typeof AwsObservabilityadminTelemetryEnrichmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/observabilityadmin_telemetry_enrichment

export function AwsObservabilityadminTelemetryEnrichment(
  props: Partial<AwsObservabilityadminTelemetryEnrichmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_observabilityadmin_telemetry_enrichment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsObservabilityadminTelemetryEnrichmentInputSchema}
      _outputSchema={AwsObservabilityadminTelemetryEnrichmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsObservabilityadminTelemetryEnrichment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsObservabilityadminTelemetryEnrichmentOutputProps>(
    AwsObservabilityadminTelemetryEnrichment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsObservabilityadminTelemetryEnrichments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsObservabilityadminTelemetryEnrichmentOutputProps>(
    AwsObservabilityadminTelemetryEnrichment,
    idFilter,
    baseNode,
    optional,
  )
