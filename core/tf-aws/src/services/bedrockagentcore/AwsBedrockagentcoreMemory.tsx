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

export const AwsBedrockagentcoreMemoryInputSchema = TfMetaSchema.extend({
  event_expiry_duration: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  encryption_key_arn: resolvableValue(z.string().optional()),
  memory_execution_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBedrockagentcoreMemoryOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBedrockagentcoreMemoryInputProps =
  & z.input<typeof AwsBedrockagentcoreMemoryInputSchema>
  & NodeProps

export type AwsBedrockagentcoreMemoryOutputProps =
  & z.output<typeof AwsBedrockagentcoreMemoryOutputSchema>
  & z.output<typeof AwsBedrockagentcoreMemoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_memory

export function AwsBedrockagentcoreMemory(
  props: Partial<AwsBedrockagentcoreMemoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_memory'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreMemoryInputSchema}
      _outputSchema={AwsBedrockagentcoreMemoryOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreMemory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreMemoryOutputProps>(
    AwsBedrockagentcoreMemory,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreMemorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreMemoryOutputProps>(
    AwsBedrockagentcoreMemory,
    idFilter,
    baseNode,
    optional,
  )
