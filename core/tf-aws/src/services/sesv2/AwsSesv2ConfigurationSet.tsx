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

export const AwsSesv2ConfigurationSetInputSchema = TfMetaSchema.extend({
  configuration_set_name: resolvableValue(z.string()),
  delivery_options: resolvableValue(
    z.object({
      max_delivery_seconds: z.number().optional(),
      sending_pool_name: z.string().optional(),
      tls_policy: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  reputation_options: resolvableValue(
    z.object({
      last_fresh_start: z.string().optional(),
      reputation_metrics_enabled: z.boolean().optional(),
    }).optional(),
  ),
  sending_options: resolvableValue(
    z.object({
      sending_enabled: z.boolean().optional(),
    }).optional(),
  ),
  suppression_options: resolvableValue(
    z.object({
      suppressed_reasons: z.string().array().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  tracking_options: resolvableValue(
    z.object({
      custom_redirect_domain: z.string(),
      https_policy: z.string().optional(),
    }).optional(),
  ),
  vdm_options: resolvableValue(
    z.object({
      dashboard_options: z.object({
        engagement_metrics: z.string().optional(),
      }).optional(),
      guardian_options: z.object({
        optimized_shared_delivery: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
})

export const AwsSesv2ConfigurationSetOutputSchema = z.object({
  arn: z.string().optional(),
  reputation_options: z.object({
    last_fresh_start: z.string().optional(),
    reputation_metrics_enabled: z.boolean().optional(),
  }).optional().optional(),
})

export type AwsSesv2ConfigurationSetInputProps =
  & z.input<typeof AwsSesv2ConfigurationSetInputSchema>
  & NodeProps

export type AwsSesv2ConfigurationSetOutputProps =
  & z.output<typeof AwsSesv2ConfigurationSetOutputSchema>
  & z.output<typeof AwsSesv2ConfigurationSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_configuration_set

export function AwsSesv2ConfigurationSet(
  props: Partial<AwsSesv2ConfigurationSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_configuration_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2ConfigurationSetInputSchema}
      _outputSchema={AwsSesv2ConfigurationSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2ConfigurationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2ConfigurationSetOutputProps>(
    AwsSesv2ConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2ConfigurationSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2ConfigurationSetOutputProps>(
    AwsSesv2ConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )
