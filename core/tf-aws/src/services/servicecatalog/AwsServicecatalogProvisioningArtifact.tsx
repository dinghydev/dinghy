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

export const AwsServicecatalogProvisioningArtifactInputSchema = TfMetaSchema
  .extend({
    product_id: resolvableValue(z.string()),
    accept_language: resolvableValue(z.string().optional()),
    active: resolvableValue(z.boolean().optional()),
    description: resolvableValue(z.string().optional()),
    disable_template_validation: resolvableValue(z.boolean().optional()),
    guidance: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    template_physical_id: resolvableValue(z.string().optional()),
    template_url: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        read: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
    type: resolvableValue(z.string().optional()),
  })

export const AwsServicecatalogProvisioningArtifactOutputSchema = z.object({
  created_time: z.string().optional(),
  id: z.string().optional(),
  provisioning_artifact_id: z.string().optional(),
})

export type AwsServicecatalogProvisioningArtifactInputProps =
  & z.input<typeof AwsServicecatalogProvisioningArtifactInputSchema>
  & NodeProps

export type AwsServicecatalogProvisioningArtifactOutputProps =
  & z.output<typeof AwsServicecatalogProvisioningArtifactOutputSchema>
  & z.output<typeof AwsServicecatalogProvisioningArtifactInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_provisioning_artifact

export function AwsServicecatalogProvisioningArtifact(
  props: Partial<AwsServicecatalogProvisioningArtifactInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_provisioning_artifact'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogProvisioningArtifactInputSchema}
      _outputSchema={AwsServicecatalogProvisioningArtifactOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogProvisioningArtifact = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogProvisioningArtifactOutputProps>(
    AwsServicecatalogProvisioningArtifact,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogProvisioningArtifacts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogProvisioningArtifactOutputProps>(
    AwsServicecatalogProvisioningArtifact,
    idFilter,
    baseNode,
    optional,
  )
