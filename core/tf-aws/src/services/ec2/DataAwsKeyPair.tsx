import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKeyPair } from './AwsKeyPair.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/key_pair

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  include_public_key: resolvableValue(z.boolean().optional()),
  key_name: resolvableValue(z.string().optional()),
  key_pair_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  fingerprint: z.string().optional(),
  id: z.string().optional(),
  key_type: z.string().optional(),
  public_key: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKeyPair(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKeyPair
      _type='aws_key_pair'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKeyPair = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKeyPair, node, id)

export const useDataAwsKeyPairs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKeyPair, node, id)
