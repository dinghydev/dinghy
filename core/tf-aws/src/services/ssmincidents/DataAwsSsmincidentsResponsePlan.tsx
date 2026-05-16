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

export const DataAwsSsmincidentsResponsePlanInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmincidentsResponsePlanOutputSchema = z.object({
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
  incident_template: z.object({
    dedupe_string: z.string(),
    impact: z.number(),
    incident_tags: z.record(z.string(), z.string()),
    notification_target: z.set(z.object({
      sns_topic_arn: z.string(),
    })),
    summary: z.string(),
    title: z.string(),
  }).array().optional(),
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

export type DataAwsSsmincidentsResponsePlanInputProps =
  & z.input<typeof DataAwsSsmincidentsResponsePlanInputSchema>
  & NodeProps

export type DataAwsSsmincidentsResponsePlanOutputProps =
  & z.output<typeof DataAwsSsmincidentsResponsePlanOutputSchema>
  & z.output<typeof DataAwsSsmincidentsResponsePlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssmincidents_response_plan

export function DataAwsSsmincidentsResponsePlan(
  props: Partial<DataAwsSsmincidentsResponsePlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmincidentsResponsePlan
      _type='aws_ssmincidents_response_plan'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmincidentsResponsePlanInputSchema}
      _outputSchema={DataAwsSsmincidentsResponsePlanOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmincidentsResponsePlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsmincidentsResponsePlanOutputProps>(
    DataAwsSsmincidentsResponsePlan,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmincidentsResponsePlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmincidentsResponsePlanOutputProps>(
    DataAwsSsmincidentsResponsePlan,
    idFilter,
    baseNode,
    optional,
  )
