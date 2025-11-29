import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamOpenidConnectProvider } from './AwsIamOpenidConnectProvider.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_openid_connect_provider

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  url: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  client_id_list: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  thumbprint_list: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamOpenidConnectProvider(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamOpenidConnectProvider
      _type='aws_iam_openid_connect_provider'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamOpenidConnectProvider = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamOpenidConnectProvider, node, id)

export const useDataAwsIamOpenidConnectProviders = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamOpenidConnectProvider, node, id)
