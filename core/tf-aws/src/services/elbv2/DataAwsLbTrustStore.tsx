import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLbTrustStore } from './AwsLbTrustStore.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lb_trust_store

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLbTrustStore(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLbTrustStore
      _type='aws_lb_trust_store'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLbTrustStore = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLbTrustStore, node, id)

export const useDataAwsLbTrustStores = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLbTrustStore, node, id)
