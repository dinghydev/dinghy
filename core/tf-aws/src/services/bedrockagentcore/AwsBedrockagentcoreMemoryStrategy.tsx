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

export const AwsBedrockagentcoreMemoryStrategyInputSchema = TfMetaSchema.extend(
  {
    memory_id: resolvableValue(z.string()),
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
  },
)

export const AwsBedrockagentcoreMemoryStrategyOutputSchema = z.object({
  memory_strategy_id: z.string().optional(),
})

export type AwsBedrockagentcoreMemoryStrategyInputProps =
  & z.input<typeof AwsBedrockagentcoreMemoryStrategyInputSchema>
  & NodeProps

export type AwsBedrockagentcoreMemoryStrategyOutputProps =
  & z.output<typeof AwsBedrockagentcoreMemoryStrategyOutputSchema>
  & z.output<typeof AwsBedrockagentcoreMemoryStrategyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_memory_strategy

export function AwsBedrockagentcoreMemoryStrategy(
  props: Partial<AwsBedrockagentcoreMemoryStrategyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_memory_strategy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreMemoryStrategyInputSchema}
      _outputSchema={AwsBedrockagentcoreMemoryStrategyOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreMemoryStrategy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreMemoryStrategyOutputProps>(
    AwsBedrockagentcoreMemoryStrategy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreMemoryStrategys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreMemoryStrategyOutputProps>(
    AwsBedrockagentcoreMemoryStrategy,
    idFilter,
    baseNode,
    optional,
  )
