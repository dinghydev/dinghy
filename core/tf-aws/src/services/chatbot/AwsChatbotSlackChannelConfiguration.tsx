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

export const AwsChatbotSlackChannelConfigurationInputSchema = TfMetaSchema
  .extend({
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

export const AwsChatbotSlackChannelConfigurationOutputSchema = z.object({
  chat_configuration_arn: z.string().optional(),
  slack_channel_name: z.string().optional(),
  slack_team_name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsChatbotSlackChannelConfigurationInputProps =
  & z.input<typeof AwsChatbotSlackChannelConfigurationInputSchema>
  & NodeProps

export type AwsChatbotSlackChannelConfigurationOutputProps =
  & z.output<typeof AwsChatbotSlackChannelConfigurationOutputSchema>
  & z.output<typeof AwsChatbotSlackChannelConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_slack_channel_configuration

export function AwsChatbotSlackChannelConfiguration(
  props: Partial<AwsChatbotSlackChannelConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chatbot_slack_channel_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChatbotSlackChannelConfigurationInputSchema}
      _outputSchema={AwsChatbotSlackChannelConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsChatbotSlackChannelConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChatbotSlackChannelConfigurationOutputProps>(
    AwsChatbotSlackChannelConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChatbotSlackChannelConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChatbotSlackChannelConfigurationOutputProps>(
    AwsChatbotSlackChannelConfiguration,
    idFilter,
    baseNode,
    optional,
  )
