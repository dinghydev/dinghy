import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/observabilityadmin_centralization_rule_for_organization

export const InputSchema = z.object({
  rule_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      destination: z.object({
        account: z.string(),
        region: z.string(),
      }).optional(),
      source: z.object({
        regions: z.string().array(),
        scope: z.string(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  rule_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsObservabilityadminCentralizationRuleForOrganization(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_observabilityadmin_centralization_rule_for_organization'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsObservabilityadminCentralizationRuleForOrganization = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsObservabilityadminCentralizationRuleForOrganization,
    node,
    id,
  )

export const useAwsObservabilityadminCentralizationRuleForOrganizations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsObservabilityadminCentralizationRuleForOrganization,
    node,
    id,
  )
