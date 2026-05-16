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

export const AwsBedrockProvisionedModelThroughputInputSchema = TfMetaSchema
  .extend({
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

export const AwsBedrockProvisionedModelThroughputOutputSchema = z.object({
  id: z.string().optional(),
  provisioned_model_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsBedrockProvisionedModelThroughputImportSchema = z.object({
  provisioned_model_arn: resolvableValue(z.string()),
})

export type AwsBedrockProvisionedModelThroughputInputProps =
  & z.input<typeof AwsBedrockProvisionedModelThroughputInputSchema>
  & z.input<typeof AwsBedrockProvisionedModelThroughputImportSchema>
  & NodeProps

export type AwsBedrockProvisionedModelThroughputOutputProps =
  & z.output<typeof AwsBedrockProvisionedModelThroughputOutputSchema>
  & z.output<typeof AwsBedrockProvisionedModelThroughputInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrock_provisioned_model_throughput

export function AwsBedrockProvisionedModelThroughput(
  props: Partial<AwsBedrockProvisionedModelThroughputInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_provisioned_model_throughput'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockProvisionedModelThroughputInputSchema}
      _outputSchema={AwsBedrockProvisionedModelThroughputOutputSchema}
      _importSchema={AwsBedrockProvisionedModelThroughputImportSchema}
      {...props}
    />
  )
}

export const useAwsBedrockProvisionedModelThroughput = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockProvisionedModelThroughputOutputProps>(
    AwsBedrockProvisionedModelThroughput,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockProvisionedModelThroughputs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockProvisionedModelThroughputOutputProps>(
    AwsBedrockProvisionedModelThroughput,
    idFilter,
    baseNode,
    optional,
  )
