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

export const AwsVpclatticeListenerRuleInputSchema = TfMetaSchema.extend({
  action: resolvableValue(z.object({
    fixed_response: z.object({
      status_code: z.number(),
    }).optional(),
    forward: z.object({
      target_groups: z.object({
        target_group_identifier: z.string(),
        weight: z.number().optional(),
      }).array(),
    }).optional(),
  })),
  listener_identifier: resolvableValue(z.string()),
  match: resolvableValue(z.object({
    http_match: z.object({
      method: z.string().optional(),
      header_matches: z.object({
        case_sensitive: z.boolean().optional(),
        name: z.string(),
        match: z.object({
          contains: z.string().optional(),
          exact: z.string().optional(),
          prefix: z.string().optional(),
        }),
      }).array().optional(),
      path_match: z.object({
        case_sensitive: z.boolean().optional(),
        match: z.object({
          exact: z.string().optional(),
          prefix: z.string().optional(),
        }),
      }).optional(),
    }),
  })),
  name: resolvableValue(z.string()),
  priority: resolvableValue(z.number()),
  service_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpclatticeListenerRuleOutputSchema = z.object({
  arn: z.string().optional(),
  rule_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpclatticeListenerRuleInputProps =
  & z.input<typeof AwsVpclatticeListenerRuleInputSchema>
  & NodeProps

export type AwsVpclatticeListenerRuleOutputProps =
  & z.output<typeof AwsVpclatticeListenerRuleOutputSchema>
  & z.output<typeof AwsVpclatticeListenerRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_listener_rule

export function AwsVpclatticeListenerRule(
  props: Partial<AwsVpclatticeListenerRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_listener_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeListenerRuleInputSchema}
      _outputSchema={AwsVpclatticeListenerRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeListenerRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeListenerRuleOutputProps>(
    AwsVpclatticeListenerRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeListenerRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeListenerRuleOutputProps>(
    AwsVpclatticeListenerRule,
    idFilter,
    baseNode,
    optional,
  )
