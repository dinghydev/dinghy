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

export const AwsRoute53recoverycontrolconfigSafetyRuleInputSchema = TfMetaSchema
  .extend({
    control_panel_arn: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    rule_config: resolvableValue(z.object({
      inverted: z.boolean(),
      threshold: z.number(),
      type: z.string(),
    })),
    wait_period_ms: resolvableValue(z.number()),
    asserted_controls: resolvableValue(z.string().array().optional()),
    gating_controls: resolvableValue(z.string().array().optional()),
    id: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    target_controls: resolvableValue(z.string().array().optional()),
  })

export const AwsRoute53recoverycontrolconfigSafetyRuleOutputSchema = z.object({
  arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53recoverycontrolconfigSafetyRuleInputProps =
  & z.input<typeof AwsRoute53recoverycontrolconfigSafetyRuleInputSchema>
  & NodeProps

export type AwsRoute53recoverycontrolconfigSafetyRuleOutputProps =
  & z.output<typeof AwsRoute53recoverycontrolconfigSafetyRuleOutputSchema>
  & z.output<typeof AwsRoute53recoverycontrolconfigSafetyRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53recoverycontrolconfig_safety_rule

export function AwsRoute53recoverycontrolconfigSafetyRule(
  props: Partial<AwsRoute53recoverycontrolconfigSafetyRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoverycontrolconfig_safety_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53recoverycontrolconfigSafetyRuleInputSchema}
      _outputSchema={AwsRoute53recoverycontrolconfigSafetyRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoverycontrolconfigSafetyRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53recoverycontrolconfigSafetyRuleOutputProps>(
    AwsRoute53recoverycontrolconfigSafetyRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoverycontrolconfigSafetyRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53recoverycontrolconfigSafetyRuleOutputProps>(
    AwsRoute53recoverycontrolconfigSafetyRule,
    idFilter,
    baseNode,
    optional,
  )
