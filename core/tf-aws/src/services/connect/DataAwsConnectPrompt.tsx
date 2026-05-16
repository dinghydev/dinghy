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

export const DataAwsConnectPromptInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsConnectPromptOutputSchema = z.object({
  arn: z.string().optional(),
  prompt_id: z.string().optional(),
})

export type DataAwsConnectPromptInputProps =
  & z.input<typeof DataAwsConnectPromptInputSchema>
  & NodeProps

export type DataAwsConnectPromptOutputProps =
  & z.output<typeof DataAwsConnectPromptOutputSchema>
  & z.output<typeof DataAwsConnectPromptInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_prompt

export function DataAwsConnectPrompt(
  props: Partial<DataAwsConnectPromptInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_prompt'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectPromptInputSchema}
      _outputSchema={DataAwsConnectPromptOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsConnectPrompt = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectPromptOutputProps>(
    DataAwsConnectPrompt,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectPrompts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectPromptOutputProps>(
    DataAwsConnectPrompt,
    idFilter,
    baseNode,
    optional,
  )
