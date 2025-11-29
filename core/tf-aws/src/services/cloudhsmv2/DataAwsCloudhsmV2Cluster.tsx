import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudhsmV2Cluster } from './AwsCloudhsmV2Cluster.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudhsm_v2_cluster

export const InputSchema = z.object({
  cluster_id: resolvableValue(z.string()),
  cluster_state: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  cluster_certificates: z.object({
    aws_hardware_certificate: z.string(),
    cluster_certificate: z.string(),
    cluster_csr: z.string(),
    hsm_certificate: z.string(),
    manufacturer_hardware_certificate: z.string(),
  }).array().optional(),
  security_group_id: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudhsmV2Cluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudhsmV2Cluster
      _type='aws_cloudhsm_v2_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudhsmV2Cluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCloudhsmV2Cluster, node, id)

export const useDataAwsCloudhsmV2Clusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCloudhsmV2Cluster, node, id)
