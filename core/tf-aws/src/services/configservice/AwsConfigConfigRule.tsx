import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/config_config_rule

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  evaluation_mode: resolvableValue(
    z.object({
      mode: z.string().optional(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  input_parameters: resolvableValue(z.string().optional()),
  maximum_execution_frequency: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(
    z.object({
      compliance_resource_id: z.string().optional(),
      compliance_resource_types: z.string().array().optional(),
      tag_key: z.string().optional(),
      tag_value: z.string().optional(),
    }).optional(),
  ),
  source: resolvableValue(z.object({
    owner: z.string(),
    source_identifier: z.string().optional(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  rule_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsConfigConfigRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_config_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigConfigRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConfigConfigRule, node, id)

export const useAwsConfigConfigRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConfigConfigRule, node, id)
