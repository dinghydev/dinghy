import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudhsmV2Cluster } from './AwsCloudhsmV2Cluster.tsx'

export const DataAwsCloudhsmV2ClusterInputSchema = TfMetaSchema.extend({
  cluster_id: resolvableValue(z.string()),
  cluster_state: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudhsmV2ClusterOutputSchema = z.object({
  cluster_certificates: z.object({
    aws_hardware_certificate: z.string(),
    cluster_certificate: z.string(),
    cluster_csr: z.string(),
    hsm_certificate: z.string(),
    manufacturer_hardware_certificate: z.string(),
  }).array().optional(),
  security_group_id: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type DataAwsCloudhsmV2ClusterInputProps =
  & z.input<typeof DataAwsCloudhsmV2ClusterInputSchema>
  & NodeProps

export type DataAwsCloudhsmV2ClusterOutputProps =
  & z.output<typeof DataAwsCloudhsmV2ClusterOutputSchema>
  & z.output<typeof DataAwsCloudhsmV2ClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudhsm_v2_cluster

export function DataAwsCloudhsmV2Cluster(
  props: Partial<DataAwsCloudhsmV2ClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudhsmV2Cluster
      _type='aws_cloudhsm_v2_cluster'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudhsmV2ClusterInputSchema}
      _outputSchema={DataAwsCloudhsmV2ClusterOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudhsmV2Cluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudhsmV2ClusterOutputProps>(
    DataAwsCloudhsmV2Cluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudhsmV2Clusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudhsmV2ClusterOutputProps>(
    DataAwsCloudhsmV2Cluster,
    idFilter,
    baseNode,
    optional,
  )
