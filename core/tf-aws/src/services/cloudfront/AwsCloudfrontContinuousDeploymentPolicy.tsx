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

export const AwsCloudfrontContinuousDeploymentPolicyInputSchema = TfMetaSchema
  .extend({
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
  })

export const AwsCloudfrontContinuousDeploymentPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  last_modified_time: z.string().optional(),
})

export type AwsCloudfrontContinuousDeploymentPolicyInputProps =
  & z.input<typeof AwsCloudfrontContinuousDeploymentPolicyInputSchema>
  & NodeProps

export type AwsCloudfrontContinuousDeploymentPolicyOutputProps =
  & z.output<typeof AwsCloudfrontContinuousDeploymentPolicyOutputSchema>
  & z.output<typeof AwsCloudfrontContinuousDeploymentPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_continuous_deployment_policy

export function AwsCloudfrontContinuousDeploymentPolicy(
  props: Partial<AwsCloudfrontContinuousDeploymentPolicyInputProps>,
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
      _inputSchema={AwsCloudfrontContinuousDeploymentPolicyInputSchema}
      _outputSchema={AwsCloudfrontContinuousDeploymentPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontContinuousDeploymentPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontContinuousDeploymentPolicyOutputProps>(
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
  useTypedNodes<AwsCloudfrontContinuousDeploymentPolicyOutputProps>(
    AwsCloudfrontContinuousDeploymentPolicy,
    idFilter,
    baseNode,
    optional,
  )
