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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  chat_configuration_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chatbot_teams_channel_configuration

export function AwsChatbotTeamsChannelConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chatbot_teams_channel_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChatbotTeamsChannelConfiguration = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsChatbotTeamsChannelConfiguration,
    idFilter,
    baseNode,
  )

export const useAwsChatbotTeamsChannelConfigurations = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsChatbotTeamsChannelConfiguration,
    idFilter,
    baseNode,
  )
