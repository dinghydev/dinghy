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

export const InputSchema = z.object({
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
      last_fresh_start: z.string(),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  reputation_options: z.object({
    last_fresh_start: z.string(),
    reputation_metrics_enabled: z.boolean().optional(),
  }).optional().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_configuration_set

export function AwsSesv2ConfigurationSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_configuration_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2ConfigurationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSesv2ConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )
