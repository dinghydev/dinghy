import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectBotAssociation } from './AwsConnectBotAssociation.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_bot_association

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  lex_bot: resolvableValue(z.object({
    lex_region: z.string().optional(),
    name: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsConnectBotAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectBotAssociation
      _type='aws_connect_bot_association'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectBotAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsConnectBotAssociation, node, id)

export const useDataAwsConnectBotAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsConnectBotAssociation, node, id)
