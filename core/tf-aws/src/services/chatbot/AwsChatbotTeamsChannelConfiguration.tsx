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

export const AwsChatbotTeamsChannelConfigurationInputSchema = TfMetaSchema
  .extend({
    channel_id: resolvableValue(z.string()),
    configuration_name: resolvableValue(z.string()),
    iam_role_arn: resolvableValue(z.string()),
    team_id: resolvableValue(z.string()),
    tenant_id: resolvableValue(z.string()),
    channel_name: resolvableValue(z.string().optional()),
    guardrail_policy_arns: resolvableValue(z.string().array().optional()),
    logging_level: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    sns_topic_arns: resolvableValue(z.string().array().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    team_name: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
    user_authorization_required: resolvableValue(z.boolean().optional()),
  })

export const AwsChatbotTeamsChannelConfigurationOutputSchema = z.object({
  chat_configuration_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsChatbotTeamsChannelConfigurationInputProps =
  & z.input<typeof AwsChatbotTeamsChannelConfigurationInputSchema>
  & NodeProps

export type AwsChatbotTeamsChannelConfigurationOutputProps =
  & z.output<typeof AwsChatbotTeamsChannelConfigurationOutputSchema>
  & z.output<typeof AwsChatbotTeamsChannelConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration

export function AwsChatbotTeamsChannelConfiguration(
  props: Partial<AwsChatbotTeamsChannelConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chatbot_teams_channel_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChatbotTeamsChannelConfigurationInputSchema}
      _outputSchema={AwsChatbotTeamsChannelConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsChatbotTeamsChannelConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChatbotTeamsChannelConfigurationOutputProps>(
    AwsChatbotTeamsChannelConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChatbotTeamsChannelConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChatbotTeamsChannelConfigurationOutputProps>(
    AwsChatbotTeamsChannelConfiguration,
    idFilter,
    baseNode,
    optional,
  )
