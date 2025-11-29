import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_agent

export const InputSchema = z.object({
  agent_name: resolvableValue(z.string()),
  agent_resource_role_arn: resolvableValue(z.string()),
  foundation_model: resolvableValue(z.string()),
  agent_collaboration: resolvableValue(z.string().optional()),
  customer_encryption_key_arn: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  guardrail_configuration: resolvableValue(
    z.object({
      guardrail_identifier: z.string(),
      guardrail_version: z.string(),
    }).array().optional(),
  ),
  idle_session_ttl_in_seconds: resolvableValue(z.number().optional()),
  instruction: resolvableValue(z.string().optional()),
  memory_configuration: resolvableValue(
    z.object({
      enabled_memory_types: z.string().array(),
      storage_days: z.number(),
    }).array().optional(),
  ),
  prepare_agent: resolvableValue(z.boolean().optional()),
  prompt_override_configuration: resolvableValue(
    z.object({
      override_lambda: z.string(),
      prompt_configurations: z.object({
        base_prompt_template: z.string(),
        inference_configuration: z.object({
          max_length: z.number(),
          stop_sequences: z.string().array(),
          temperature: z.number(),
          top_k: z.number(),
          top_p: z.number(),
        }).array(),
        parser_mode: z.string(),
        prompt_creation_mode: z.string(),
        prompt_state: z.string(),
        prompt_type: z.string(),
      }).array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  skip_resource_in_use_check: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  agent_arn: z.string().optional(),
  agent_id: z.string().optional(),
  agent_version: z.string().optional(),
  id: z.string().optional(),
  prepared_at: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentAgent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentAgent = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentAgent, node, id)

export const useAwsBedrockagentAgents = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentAgent, node, id)
