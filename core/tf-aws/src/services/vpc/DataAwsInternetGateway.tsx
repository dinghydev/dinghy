import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsInternetGateway } from './AwsInternetGateway.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/internet_gateway

export const InputSchema = z.object({
  attachments: resolvableValue(
    z.object({
      state: z.string(),
      vpc_id: z.string(),
    }).array(),
  ),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  internet_gateway_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  owner_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsInternetGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsInternetGateway
      _type='aws_internet_gateway'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsInternetGateway = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsInternetGateway, node, id)

export const useDataAwsInternetGateways = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsInternetGateway, node, id)
