import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsServicecatalogProvisioningArtifactsInputSchema =
  TfMetaSchema.extend({
    product_id: resolvableValue(z.string()),
    accept_language: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsServicecatalogProvisioningArtifactsOutputSchema = z.object({
  provisioning_artifact_details: z.object({
    active: z.boolean(),
    created_time: z.string(),
    description: z.string(),
    guidance: z.string(),
    id: z.string(),
    name: z.string(),
    type: z.string(),
  }).array().optional(),
})

export type DataAwsServicecatalogProvisioningArtifactsInputProps =
  & z.input<typeof DataAwsServicecatalogProvisioningArtifactsInputSchema>
  & NodeProps

export type DataAwsServicecatalogProvisioningArtifactsOutputProps =
  & z.output<typeof DataAwsServicecatalogProvisioningArtifactsOutputSchema>
  & z.output<typeof DataAwsServicecatalogProvisioningArtifactsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicecatalog_provisioning_artifacts

export function DataAwsServicecatalogProvisioningArtifacts(
  props: Partial<DataAwsServicecatalogProvisioningArtifactsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_provisioning_artifacts'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicecatalogProvisioningArtifactsInputSchema}
      _outputSchema={DataAwsServicecatalogProvisioningArtifactsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicecatalogProvisioningArtifactss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicecatalogProvisioningArtifactsOutputProps>(
    DataAwsServicecatalogProvisioningArtifacts,
    idFilter,
    baseNode,
    optional,
  )
