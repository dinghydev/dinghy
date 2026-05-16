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

export const AwsSsmincidentsResponsePlanInputSchema = TfMetaSchema.extend({
  incident_template: resolvableValue(z.object({
    dedupe_string: z.string().optional(),
    impact: z.number(),
    incident_tags: z.record(z.string(), z.string()).optional(),
    summary: z.string().optional(),
    title: z.string(),
    notification_target: z.object({
      sns_topic_arn: z.string(),
    }).array().optional(),
  })),
  name: resolvableValue(z.string()),
  action: resolvableValue(
    z.object({
      ssm_automation: z.object({
        document_name: z.string(),
        document_version: z.string().optional(),
        dynamic_parameters: z.record(z.string(), z.string()).optional(),
        role_arn: z.string(),
        target_account: z.string().optional(),
        parameter: z.object({
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
      }).array().optional(),
    }).optional(),
  ),
  chat_channel: resolvableValue(z.string().array().optional()),
  display_name: resolvableValue(z.string().optional()),
  engagements: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  integration: resolvableValue(
    z.object({
      pagerduty: z.object({
        name: z.string(),
        secret_id: z.string(),
        service_id: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSsmincidentsResponsePlanOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSsmincidentsResponsePlanInputProps =
  & z.input<typeof AwsSsmincidentsResponsePlanInputSchema>
  & NodeProps

export type AwsSsmincidentsResponsePlanOutputProps =
  & z.output<typeof AwsSsmincidentsResponsePlanOutputSchema>
  & z.output<typeof AwsSsmincidentsResponsePlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssmincidents_response_plan

export function AwsSsmincidentsResponsePlan(
  props: Partial<AwsSsmincidentsResponsePlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmincidents_response_plan'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmincidentsResponsePlanInputSchema}
      _outputSchema={AwsSsmincidentsResponsePlanOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmincidentsResponsePlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmincidentsResponsePlanOutputProps>(
    AwsSsmincidentsResponsePlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmincidentsResponsePlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmincidentsResponsePlanOutputProps>(
    AwsSsmincidentsResponsePlan,
    idFilter,
    baseNode,
    optional,
  )
