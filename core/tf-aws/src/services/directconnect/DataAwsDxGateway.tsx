import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDxGateway } from './AwsDxGateway.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dx_gateway

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  amazon_side_asn: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDxGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDxGateway
      _type='aws_dx_gateway'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDxGateway = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsDxGateway, node, id)

export const useDataAwsDxGateways = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsDxGateway, node, id)
