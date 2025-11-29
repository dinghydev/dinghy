import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_agent_action_group

export const InputSchema = z.object({
  action_group_id: resolvableValue(z.string()),
  action_group_name: resolvableValue(z.string()),
  agent_id: resolvableValue(z.string()),
  agent_version: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  action_group_executor: resolvableValue(
    z.object({
      custom_control: z.string().optional(),
      lambda: z.string().optional(),
    }).optional(),
  ),
  action_group_state: resolvableValue(z.string().optional()),
  api_schema: resolvableValue(
    z.object({
      payload: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  function_schema: resolvableValue(
    z.object({
      member_functions: z.object({
        functions: z.object({
          description: z.string().optional(),
          name: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  parent_action_group_signature: resolvableValue(z.string().optional()),
  prepare_agent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  skip_resource_in_use_check: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentAgentActionGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent_action_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentAgentActionGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentAgentActionGroup, node, id)

export const useAwsBedrockagentAgentActionGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentAgentActionGroup, node, id)
