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

export const AwsBedrockagentcoreCodeInterpreterInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    execution_role_arn: resolvableValue(z.string().optional()),
    network_configuration: resolvableValue(
      z.object({
        network_mode: z.string(),
        vpc_config: z.object({
          security_groups: z.string().array(),
          subnets: z.string().array(),
        }).array().optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsBedrockagentcoreCodeInterpreterOutputSchema = z.object({
  code_interpreter_arn: z.string().optional(),
  code_interpreter_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBedrockagentcoreCodeInterpreterInputProps =
  & z.input<typeof AwsBedrockagentcoreCodeInterpreterInputSchema>
  & NodeProps

export type AwsBedrockagentcoreCodeInterpreterOutputProps =
  & z.output<typeof AwsBedrockagentcoreCodeInterpreterOutputSchema>
  & z.output<typeof AwsBedrockagentcoreCodeInterpreterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_code_interpreter

export function AwsBedrockagentcoreCodeInterpreter(
  props: Partial<AwsBedrockagentcoreCodeInterpreterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_code_interpreter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreCodeInterpreterInputSchema}
      _outputSchema={AwsBedrockagentcoreCodeInterpreterOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreCodeInterpreter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreCodeInterpreterOutputProps>(
    AwsBedrockagentcoreCodeInterpreter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreCodeInterpreters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreCodeInterpreterOutputProps>(
    AwsBedrockagentcoreCodeInterpreter,
    idFilter,
    baseNode,
    optional,
  )
