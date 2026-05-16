import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsCloudhsmV2ClusterInputSchema = TfMetaSchema.extend({
  hsm_type: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  id: resolvableValue(z.string().optional()),
  mode: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_backup_identifier: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCloudhsmV2ClusterOutputSchema = z.object({
  cluster_certificates: z.object({
    aws_hardware_certificate: z.string(),
    cluster_certificate: z.string(),
    cluster_csr: z.string(),
    hsm_certificate: z.string(),
    manufacturer_hardware_certificate: z.string(),
  }).array().optional(),
  cluster_id: z.string().optional(),
  cluster_state: z.string().optional(),
  security_group_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsCloudhsmV2ClusterInputProps =
  & z.input<typeof AwsCloudhsmV2ClusterInputSchema>
  & NodeProps

export type AwsCloudhsmV2ClusterOutputProps =
  & z.output<typeof AwsCloudhsmV2ClusterOutputSchema>
  & z.output<typeof AwsCloudhsmV2ClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudhsm_v2_cluster

export function AwsCloudhsmV2Cluster(
  props: Partial<AwsCloudhsmV2ClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudhsm_v2_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudhsmV2ClusterInputSchema}
      _outputSchema={AwsCloudhsmV2ClusterOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudhsmV2Cluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudhsmV2ClusterOutputProps>(
    AwsCloudhsmV2Cluster,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudhsmV2Clusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudhsmV2ClusterOutputProps>(
    AwsCloudhsmV2Cluster,
    idFilter,
    baseNode,
    optional,
  )
