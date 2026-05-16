import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOdbCloudExadataInfrastructuresInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOdbCloudExadataInfrastructuresOutputSchema = z.object({
  cloud_exadata_infrastructures: z.object({
    arn: z.string(),
    display_name: z.string(),
    id: z.string(),
    oci_resource_anchor_name: z.string(),
    oci_url: z.string(),
    ocid: z.string(),
  }).array().optional(),
})

export type DataAwsOdbCloudExadataInfrastructuresInputProps =
  & z.input<typeof DataAwsOdbCloudExadataInfrastructuresInputSchema>
  & NodeProps

export type DataAwsOdbCloudExadataInfrastructuresOutputProps =
  & z.output<typeof DataAwsOdbCloudExadataInfrastructuresOutputSchema>
  & z.output<typeof DataAwsOdbCloudExadataInfrastructuresInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_cloud_exadata_infrastructures

export function DataAwsOdbCloudExadataInfrastructures(
  props: Partial<DataAwsOdbCloudExadataInfrastructuresInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_cloud_exadata_infrastructures'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOdbCloudExadataInfrastructuresInputSchema}
      _outputSchema={DataAwsOdbCloudExadataInfrastructuresOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbCloudExadataInfrastructuress = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOdbCloudExadataInfrastructuresOutputProps>(
    DataAwsOdbCloudExadataInfrastructures,
    idFilter,
    baseNode,
    optional,
  )
