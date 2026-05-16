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

export const AwsPrometheusResourcePolicyInputSchema = TfMetaSchema.extend({
  policy_document: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsPrometheusResourcePolicyOutputSchema = z.object({
  revision_id: z.string().optional(),
})

export type AwsPrometheusResourcePolicyInputProps =
  & z.input<typeof AwsPrometheusResourcePolicyInputSchema>
  & NodeProps

export type AwsPrometheusResourcePolicyOutputProps =
  & z.output<typeof AwsPrometheusResourcePolicyOutputSchema>
  & z.output<typeof AwsPrometheusResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_resource_policy

export function AwsPrometheusResourcePolicy(
  props: Partial<AwsPrometheusResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPrometheusResourcePolicyInputSchema}
      _outputSchema={AwsPrometheusResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPrometheusResourcePolicyOutputProps>(
    AwsPrometheusResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPrometheusResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPrometheusResourcePolicyOutputProps>(
    AwsPrometheusResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
