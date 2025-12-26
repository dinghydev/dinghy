import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesv2ConfigurationSet } from './AwsSesv2ConfigurationSet.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  configuration_set_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  delivery_options: z.object({
    max_delivery_seconds: z.number(),
    sending_pool_name: z.string(),
    tls_policy: z.string(),
  }).array().optional(),
  reputation_options: z.object({
    last_fresh_start: z.string(),
    reputation_metrics_enabled: z.boolean(),
  }).array().optional(),
  sending_options: z.object({
    sending_enabled: z.boolean(),
  }).array().optional(),
  suppression_options: z.object({
    suppressed_reasons: z.string().array(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tracking_options: z.object({
    custom_redirect_domain: z.string(),
    https_policy: z.string(),
  }).array().optional(),
  vdm_options: z.object({
    dashboard_options: z.object({
      engagement_metrics: z.string(),
    }).array(),
    guardian_options: z.object({
      optimized_shared_delivery: z.string(),
    }).array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sesv2_configuration_set

export function DataAwsSesv2ConfigurationSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSesv2ConfigurationSet
      _type='aws_sesv2_configuration_set'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesv2ConfigurationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsSesv2ConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSesv2ConfigurationSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSesv2ConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )
