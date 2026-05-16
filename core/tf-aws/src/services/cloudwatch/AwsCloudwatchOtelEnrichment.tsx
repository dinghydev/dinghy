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

export const AwsCloudwatchOtelEnrichmentInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCloudwatchOtelEnrichmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsCloudwatchOtelEnrichmentInputProps =
  & z.input<typeof AwsCloudwatchOtelEnrichmentInputSchema>
  & NodeProps

export type AwsCloudwatchOtelEnrichmentOutputProps =
  & z.output<typeof AwsCloudwatchOtelEnrichmentOutputSchema>
  & z.output<typeof AwsCloudwatchOtelEnrichmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_otel_enrichment

export function AwsCloudwatchOtelEnrichment(
  props: Partial<AwsCloudwatchOtelEnrichmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_otel_enrichment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchOtelEnrichmentInputSchema}
      _outputSchema={AwsCloudwatchOtelEnrichmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchOtelEnrichment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchOtelEnrichmentOutputProps>(
    AwsCloudwatchOtelEnrichment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchOtelEnrichments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchOtelEnrichmentOutputProps>(
    AwsCloudwatchOtelEnrichment,
    idFilter,
    baseNode,
    optional,
  )
