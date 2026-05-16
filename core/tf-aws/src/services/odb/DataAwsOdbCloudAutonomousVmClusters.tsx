import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOdbCloudAutonomousVmClustersInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOdbCloudAutonomousVmClustersOutputSchema = z.object({
  cloud_autonomous_vm_clusters: z.object({
    arn: z.string(),
    cloud_exadata_infrastructure_id: z.string(),
    display_name: z.string(),
    id: z.string(),
    oci_resource_anchor_name: z.string(),
    oci_url: z.string(),
    ocid: z.string(),
    odb_network_id: z.string(),
  }).array().optional(),
})

export type DataAwsOdbCloudAutonomousVmClustersInputProps =
  & z.input<typeof DataAwsOdbCloudAutonomousVmClustersInputSchema>
  & NodeProps

export type DataAwsOdbCloudAutonomousVmClustersOutputProps =
  & z.output<typeof DataAwsOdbCloudAutonomousVmClustersOutputSchema>
  & z.output<typeof DataAwsOdbCloudAutonomousVmClustersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_cloud_autonomous_vm_clusters

export function DataAwsOdbCloudAutonomousVmClusters(
  props: Partial<DataAwsOdbCloudAutonomousVmClustersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_cloud_autonomous_vm_clusters'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOdbCloudAutonomousVmClustersInputSchema}
      _outputSchema={DataAwsOdbCloudAutonomousVmClustersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbCloudAutonomousVmClusterss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOdbCloudAutonomousVmClustersOutputProps>(
    DataAwsOdbCloudAutonomousVmClusters,
    idFilter,
    baseNode,
    optional,
  )
