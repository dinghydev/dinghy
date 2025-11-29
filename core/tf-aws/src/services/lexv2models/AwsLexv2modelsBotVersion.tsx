import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lexv2models_bot_version

export const InputSchema = z.object({
  bot_id: resolvableValue(z.string()),
  locale_specification: resolvableValue(z.record(
    z.string(),
    z.object({
      source_bot_version: z.string(),
    }),
  )),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  bot_version: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLexv2modelsBotVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_bot_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsBotVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLexv2modelsBotVersion, node, id)

export const useAwsLexv2modelsBotVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsBotVersion, node, id)
