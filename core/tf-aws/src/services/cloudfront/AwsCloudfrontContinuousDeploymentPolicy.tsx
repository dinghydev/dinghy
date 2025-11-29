import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_continuous_deployment_policy

export const InputSchema = z.object({
  enabled: resolvableValue(z.boolean()),
  staging_distribution_dns_names: resolvableValue(
    z.object({
      items: z.string().array().optional(),
      quantity: z.number(),
    }).optional(),
  ),
  traffic_config: resolvableValue(
    z.object({
      type: z.string(),
    }).optional(),
  ),
})

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

export function AwsCloudfrontContinuousDeploymentPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsCloudfrontContinuousDeploymentPolicy, node, id)

export const useAwsCloudfrontContinuousDeploymentPolicys = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsCloudfrontContinuousDeploymentPolicy, node, id)
