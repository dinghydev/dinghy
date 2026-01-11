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
  enabled: resolvableValue(z.boolean()),
  staging_distribution_dns_names: resolvableValue(
    z.object({
      items: z.string().array().optional(),
      quantity: z.number(),
    }).array().optional(),
  ),
  traffic_config: resolvableValue(
    z.object({
      type: z.string(),
      single_header_config: z.object({
        header: z.string(),
        value: z.string(),
      }).array().optional(),
      single_weight_config: z.object({
        weight: z.number(),
        session_stickiness_config: z.object({
          idle_ttl: z.number(),
          maximum_ttl: z.number(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  last_modified_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_continuous_deployment_policy

export function AwsCloudfrontContinuousDeploymentPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_continuous_deployment_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontContinuousDeploymentPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudfrontContinuousDeploymentPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontContinuousDeploymentPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudfrontContinuousDeploymentPolicy,
    idFilter,
    baseNode,
    optional,
  )
