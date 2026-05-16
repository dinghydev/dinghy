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

export const AwsBedrockGuardrailVersionInputSchema = TfMetaSchema.extend({
  guardrail_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBedrockGuardrailVersionOutputSchema = z.object({
  version: z.string().optional(),
})

export type AwsBedrockGuardrailVersionInputProps =
  & z.input<typeof AwsBedrockGuardrailVersionInputSchema>
  & NodeProps

export type AwsBedrockGuardrailVersionOutputProps =
  & z.output<typeof AwsBedrockGuardrailVersionOutputSchema>
  & z.output<typeof AwsBedrockGuardrailVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrock_guardrail_version

export function AwsBedrockGuardrailVersion(
  props: Partial<AwsBedrockGuardrailVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_guardrail_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockGuardrailVersionInputSchema}
      _outputSchema={AwsBedrockGuardrailVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockGuardrailVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockGuardrailVersionOutputProps>(
    AwsBedrockGuardrailVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockGuardrailVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockGuardrailVersionOutputProps>(
    AwsBedrockGuardrailVersion,
    idFilter,
    baseNode,
    optional,
  )
