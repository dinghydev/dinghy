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

export const AwsApigatewayv2RoutingRuleInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  priority: resolvableValue(z.number()),
  action: resolvableValue(
    z.object({
      invoke_api: z.object({
        api_id: z.string(),
        stage: z.string(),
        strip_base_path: z.boolean().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  condition: resolvableValue(
    z.object({
      match_base_paths: z.object({
        any_of: z.string().array(),
      }).array().optional(),
      match_headers: z.object({
        any_of: z.object({
          header: z.string(),
          value_glob: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsApigatewayv2RoutingRuleOutputSchema = z.object({
  routing_rule_arn: z.string().optional(),
  routing_rule_id: z.string().optional(),
})

export type AwsApigatewayv2RoutingRuleInputProps =
  & z.input<typeof AwsApigatewayv2RoutingRuleInputSchema>
  & NodeProps

export type AwsApigatewayv2RoutingRuleOutputProps =
  & z.output<typeof AwsApigatewayv2RoutingRuleOutputSchema>
  & z.output<typeof AwsApigatewayv2RoutingRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_routing_rule

export function AwsApigatewayv2RoutingRule(
  props: Partial<AwsApigatewayv2RoutingRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_routing_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2RoutingRuleInputSchema}
      _outputSchema={AwsApigatewayv2RoutingRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2RoutingRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2RoutingRuleOutputProps>(
    AwsApigatewayv2RoutingRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2RoutingRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2RoutingRuleOutputProps>(
    AwsApigatewayv2RoutingRule,
    idFilter,
    baseNode,
    optional,
  )
