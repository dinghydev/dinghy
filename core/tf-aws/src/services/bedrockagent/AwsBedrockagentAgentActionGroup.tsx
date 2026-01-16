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

export const InputSchema = TfMetaSchema.extend({
  action_group_id: resolvableValue(z.string()),
  action_group_name: resolvableValue(z.string()),
  agent_id: resolvableValue(z.string()),
  agent_version: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  action_group_executor: resolvableValue(
    z.object({
      custom_control: z.string().optional(),
      lambda: z.string().optional(),
    }).array().optional(),
  ),
  action_group_state: resolvableValue(z.string().optional()),
  api_schema: resolvableValue(
    z.object({
      payload: z.string().optional(),
      s3: z.object({
        s3_bucket_name: z.string().optional(),
        s3_object_key: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  function_schema: resolvableValue(
    z.object({
      member_functions: z.object({
        functions: z.object({
          description: z.string().optional(),
          name: z.string(),
          parameters: z.object({
            description: z.string().optional(),
            map_block_key: z.string(),
            required: z.boolean().optional(),
            type: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagent_agent_action_group

export function AwsBedrockagentAgentActionGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsBedrockagentAgentActionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentAgentActionGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentAgentActionGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentAgentActionGroup,
    idFilter,
    baseNode,
    optional,
  )
