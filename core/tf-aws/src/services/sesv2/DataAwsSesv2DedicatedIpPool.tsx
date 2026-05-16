import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesv2DedicatedIpPool } from './AwsSesv2DedicatedIpPool.tsx'

export const DataAwsSesv2DedicatedIpPoolInputSchema = TfMetaSchema.extend({
  pool_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSesv2DedicatedIpPoolOutputSchema = z.object({
  arn: z.string().optional(),
  dedicated_ips: z.object({
    ip: z.string(),
    warmup_percentage: z.number(),
    warmup_status: z.string(),
  }).array().optional(),
  scaling_mode: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsSesv2DedicatedIpPoolInputProps =
  & z.input<typeof DataAwsSesv2DedicatedIpPoolInputSchema>
  & NodeProps

export type DataAwsSesv2DedicatedIpPoolOutputProps =
  & z.output<typeof DataAwsSesv2DedicatedIpPoolOutputSchema>
  & z.output<typeof DataAwsSesv2DedicatedIpPoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sesv2_dedicated_ip_pool

export function DataAwsSesv2DedicatedIpPool(
  props: Partial<DataAwsSesv2DedicatedIpPoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSesv2DedicatedIpPool
      _type='aws_sesv2_dedicated_ip_pool'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSesv2DedicatedIpPoolInputSchema}
      _outputSchema={DataAwsSesv2DedicatedIpPoolOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesv2DedicatedIpPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSesv2DedicatedIpPoolOutputProps>(
    DataAwsSesv2DedicatedIpPool,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSesv2DedicatedIpPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSesv2DedicatedIpPoolOutputProps>(
    DataAwsSesv2DedicatedIpPool,
    idFilter,
    baseNode,
    optional,
  )
