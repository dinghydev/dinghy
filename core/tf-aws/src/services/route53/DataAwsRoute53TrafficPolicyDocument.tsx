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
  endpoint: resolvableValue(
    z.object({
      id: z.string(),
      region: z.string().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  record_type: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      id: z.string(),
      type: z.string().optional(),
      geo_proximity_location: z.object({
        bias: z.string().optional(),
        endpoint_reference: z.string().optional(),
        evaluate_target_health: z.boolean().optional(),
        health_check: z.string().optional(),
        latitude: z.string().optional(),
        longitude: z.string().optional(),
        region: z.string().optional(),
        rule_reference: z.string().optional(),
      }).array().optional(),
      items: z.object({
        endpoint_reference: z.string().optional(),
        health_check: z.string().optional(),
      }).array().optional(),
      location: z.object({
        continent: z.string().optional(),
        country: z.string().optional(),
        endpoint_reference: z.string().optional(),
        evaluate_target_health: z.boolean().optional(),
        health_check: z.string().optional(),
        is_default: z.boolean().optional(),
        rule_reference: z.string().optional(),
        subdivision: z.string().optional(),
      }).array().optional(),
      primary: z.object({
        endpoint_reference: z.string().optional(),
        evaluate_target_health: z.boolean().optional(),
        health_check: z.string().optional(),
        rule_reference: z.string().optional(),
      }).optional(),
      region: z.object({
        endpoint_reference: z.string().optional(),
        evaluate_target_health: z.boolean().optional(),
        health_check: z.string().optional(),
        region: z.string().optional(),
        rule_reference: z.string().optional(),
      }).array().optional(),
      secondary: z.object({
        endpoint_reference: z.string().optional(),
        evaluate_target_health: z.boolean().optional(),
        health_check: z.string().optional(),
        rule_reference: z.string().optional(),
      }).optional(),
    }).array().optional(),
  ),
  start_endpoint: resolvableValue(z.string().optional()),
  start_rule: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  json: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_traffic_policy_document

export function DataAwsRoute53TrafficPolicyDocument(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_traffic_policy_document'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53TrafficPolicyDocument = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsRoute53TrafficPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53TrafficPolicyDocuments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRoute53TrafficPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )
