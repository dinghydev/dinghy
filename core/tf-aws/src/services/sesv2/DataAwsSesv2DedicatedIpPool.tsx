import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesv2DedicatedIpPool } from './AwsSesv2DedicatedIpPool.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sesv2_dedicated_ip_pool

export const InputSchema = z.object({
  pool_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dedicated_ips: z.object({
    ip: z.string(),
    warmup_percentage: z.number(),
    warmup_status: z.string(),
  }).array().optional(),
  scaling_mode: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSesv2DedicatedIpPool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSesv2DedicatedIpPool
      _type='aws_sesv2_dedicated_ip_pool'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesv2DedicatedIpPool = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSesv2DedicatedIpPool, node, id)

export const useDataAwsSesv2DedicatedIpPools = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSesv2DedicatedIpPool, node, id)
