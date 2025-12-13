import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmincidentsResponsePlan } from './AwsSsmincidentsResponsePlan.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  incident_template: resolvableValue(
    z.object({
      dedupe_string: z.string(),
      impact: z.number(),
      incident_tags: z.record(z.string(), z.string()),
      notification_target: z.object({
        sns_topic_arn: z.string(),
      }).array(),
      summary: z.string(),
      title: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  action: z.object({
    ssm_automation: z.object({
      document_name: z.string(),
      document_version: z.string(),
      dynamic_parameters: z.record(z.string(), z.string()),
      parameter: z.set(z.object({
        name: z.string(),
        values: z.set(z.string()),
      })),
      role_arn: z.string(),
      target_account: z.string(),
    }).array(),
  }).array().optional(),
  chat_channel: z.set(z.string()).optional(),
  display_name: z.string().optional(),
  engagements: z.set(z.string()).optional(),
  integration: z.object({
    pagerduty: z.object({
      name: z.string(),
      secret_id: z.string(),
      service_id: z.string(),
    }).array(),
  }).array().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssmincidents_response_plan

export function DataAwsSsmincidentsResponsePlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsmincidentsResponsePlan
      _type='aws_ssmincidents_response_plan'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmincidentsResponsePlan = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(DataAwsSsmincidentsResponsePlan, idFilter, baseNode)

export const useDataAwsSsmincidentsResponsePlans = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSsmincidentsResponsePlan,
    idFilter,
    baseNode,
  )
