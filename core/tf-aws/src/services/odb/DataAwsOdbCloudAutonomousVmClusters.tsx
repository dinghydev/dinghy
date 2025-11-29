import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_cloud_autonomous_vm_clusters

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOdbCloudAutonomousVmClusters(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_cloud_autonomous_vm_clusters'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbCloudAutonomousVmClusterss = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsOdbCloudAutonomousVmClusters, node, id)
