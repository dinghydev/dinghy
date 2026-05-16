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

export const AwsRedshiftserverlessCustomDomainAssociationInputSchema =
  TfMetaSchema.extend({
    custom_domain_certificate_arn: resolvableValue(z.string()),
    custom_domain_name: resolvableValue(z.string()),
    workgroup_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsRedshiftserverlessCustomDomainAssociationOutputSchema = z
  .object({
    custom_domain_certificate_expiry_time: z.string().optional(),
    id: z.string().optional(),
  })

export type AwsRedshiftserverlessCustomDomainAssociationInputProps =
  & z.input<typeof AwsRedshiftserverlessCustomDomainAssociationInputSchema>
  & NodeProps

export type AwsRedshiftserverlessCustomDomainAssociationOutputProps =
  & z.output<typeof AwsRedshiftserverlessCustomDomainAssociationOutputSchema>
  & z.output<typeof AwsRedshiftserverlessCustomDomainAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftserverless_custom_domain_association

export function AwsRedshiftserverlessCustomDomainAssociation(
  props: Partial<AwsRedshiftserverlessCustomDomainAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_custom_domain_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftserverlessCustomDomainAssociationInputSchema}
      _outputSchema={AwsRedshiftserverlessCustomDomainAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessCustomDomainAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftserverlessCustomDomainAssociationOutputProps>(
    AwsRedshiftserverlessCustomDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftserverlessCustomDomainAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftserverlessCustomDomainAssociationOutputProps>(
    AwsRedshiftserverlessCustomDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )
