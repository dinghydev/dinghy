import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrock_provisioned_model_throughput

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  model_arn: resolvableValue(z.string()),
  model_units: resolvableValue(z.number()),
  provisioned_model_name: resolvableValue(z.string()),
  commitment_duration: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  provisioned_model_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  provisioned_model_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockProvisionedModelThroughput(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_provisioned_model_throughput'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsBedrockProvisionedModelThroughput = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsBedrockProvisionedModelThroughput, node, id)

export const useAwsBedrockProvisionedModelThroughputs = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsBedrockProvisionedModelThroughput, node, id)
