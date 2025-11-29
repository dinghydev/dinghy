import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chatbot_slack_channel_configuration

export const InputSchema = z.object({
  configuration_name: resolvableValue(z.string()),
  iam_role_arn: resolvableValue(z.string()),
  slack_channel_id: resolvableValue(z.string()),
  slack_team_id: resolvableValue(z.string()),
  guardrail_policy_arns: resolvableValue(z.string().array().optional()),
  logging_level: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sns_topic_arns: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_authorization_required: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  chat_configuration_arn: z.string().optional(),
  slack_channel_name: z.string().optional(),
  slack_team_name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsChatbotSlackChannelConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chatbot_slack_channel_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChatbotSlackChannelConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsChatbotSlackChannelConfiguration, node, id)

export const useAwsChatbotSlackChannelConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsChatbotSlackChannelConfiguration, node, id)
