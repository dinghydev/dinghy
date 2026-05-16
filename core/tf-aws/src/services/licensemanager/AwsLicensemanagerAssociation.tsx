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

export const AwsLicensemanagerAssociationInputSchema = TfMetaSchema.extend({
  license_configuration_arn: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLicensemanagerAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLicensemanagerAssociationInputProps =
  & z.input<typeof AwsLicensemanagerAssociationInputSchema>
  & NodeProps

export type AwsLicensemanagerAssociationOutputProps =
  & z.output<typeof AwsLicensemanagerAssociationOutputSchema>
  & z.output<typeof AwsLicensemanagerAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/licensemanager_association

export function AwsLicensemanagerAssociation(
  props: Partial<AwsLicensemanagerAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLicensemanagerAssociationInputSchema}
      _outputSchema={AwsLicensemanagerAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsLicensemanagerAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLicensemanagerAssociationOutputProps>(
    AwsLicensemanagerAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLicensemanagerAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLicensemanagerAssociationOutputProps>(
    AwsLicensemanagerAssociation,
    idFilter,
    baseNode,
    optional,
  )
