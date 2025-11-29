import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_bot_association

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  lex_bot: resolvableValue(z.object({
    lex_region: z.string().optional(),
    name: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsConnectBotAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_bot_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectBotAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConnectBotAssociation, node, id)

export const useAwsConnectBotAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConnectBotAssociation, node, id)
