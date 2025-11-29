import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssmincidents_response_plan

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  action: resolvableValue(
    z.object({
      ssm_automation: z.object({
        document_name: z.string(),
        document_version: z.string().optional(),
        dynamic_parameters: z.record(z.string(), z.string()).optional(),
        role_arn: z.string(),
        target_account: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  chat_channel: resolvableValue(z.string().array().optional()),
  display_name: resolvableValue(z.string().optional()),
  engagements: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  incident_template: resolvableValue(z.object({
    dedupe_string: z.string().optional(),
    impact: z.number(),
    incident_tags: z.record(z.string(), z.string()).optional(),
    summary: z.string().optional(),
    title: z.string(),
  })),
  integration: resolvableValue(
    z.object({
      pagerduty: z.object({
        name: z.string(),
        secret_id: z.string(),
        service_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsmincidentsResponsePlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmincidents_response_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmincidentsResponsePlan = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmincidentsResponsePlan, node, id)

export const useAwsSsmincidentsResponsePlans = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmincidentsResponsePlan, node, id)
