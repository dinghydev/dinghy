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

export const AwsCloudwatchEventRuleInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  event_bus_name: resolvableValue(z.string().optional()),
  event_pattern: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  is_enabled: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  schedule_expression: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudwatchEventRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCloudwatchEventRuleImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCloudwatchEventRuleInputProps =
  & z.input<typeof AwsCloudwatchEventRuleInputSchema>
  & z.input<typeof AwsCloudwatchEventRuleImportSchema>
  & NodeProps

export type AwsCloudwatchEventRuleOutputProps =
  & z.output<typeof AwsCloudwatchEventRuleOutputSchema>
  & z.output<typeof AwsCloudwatchEventRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_event_rule

export function AwsCloudwatchEventRule(
  props: Partial<AwsCloudwatchEventRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchEventRuleInputSchema}
      _outputSchema={AwsCloudwatchEventRuleOutputSchema}
      _importSchema={AwsCloudwatchEventRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchEventRuleOutputProps>(
    AwsCloudwatchEventRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchEventRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchEventRuleOutputProps>(
    AwsCloudwatchEventRule,
    idFilter,
    baseNode,
    optional,
  )
