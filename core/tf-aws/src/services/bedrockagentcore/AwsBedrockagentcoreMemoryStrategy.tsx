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
  memory_id: resolvableValue(z.string()),
  memory_strategy_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  namespaces: resolvableValue(z.string().array()),
  type: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      type: z.string(),
      consolidation: z.object({
        append_to_prompt: z.string(),
        model_id: z.string(),
      }).array().optional(),
      extraction: z.object({
        append_to_prompt: z.string(),
        model_id: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  memory_execution_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_memory_strategy

export function AwsBedrockagentcoreMemoryStrategy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_memory_strategy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreMemoryStrategy = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentcoreMemoryStrategy,
    idFilter,
    baseNode,
  )

export const useAwsBedrockagentcoreMemoryStrategys = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreMemoryStrategy,
    idFilter,
    baseNode,
  )
