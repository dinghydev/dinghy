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

export const AwsGrafanaLicenseAssociationInputSchema = TfMetaSchema.extend({
  license_type: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  grafana_token: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsGrafanaLicenseAssociationOutputSchema = z.object({
  free_trial_expiration: z.string().optional(),
  license_expiration: z.string().optional(),
})

export type AwsGrafanaLicenseAssociationInputProps =
  & z.input<typeof AwsGrafanaLicenseAssociationInputSchema>
  & NodeProps

export type AwsGrafanaLicenseAssociationOutputProps =
  & z.output<typeof AwsGrafanaLicenseAssociationOutputSchema>
  & z.output<typeof AwsGrafanaLicenseAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_license_association

export function AwsGrafanaLicenseAssociation(
  props: Partial<AwsGrafanaLicenseAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_license_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGrafanaLicenseAssociationInputSchema}
      _outputSchema={AwsGrafanaLicenseAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaLicenseAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGrafanaLicenseAssociationOutputProps>(
    AwsGrafanaLicenseAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGrafanaLicenseAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGrafanaLicenseAssociationOutputProps>(
    AwsGrafanaLicenseAssociation,
    idFilter,
    baseNode,
    optional,
  )
