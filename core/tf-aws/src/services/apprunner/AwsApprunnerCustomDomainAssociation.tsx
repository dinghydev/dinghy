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

export const AwsApprunnerCustomDomainAssociationInputSchema = TfMetaSchema
  .extend({
    domain_name: resolvableValue(z.string()),
    service_arn: resolvableValue(z.string()),
    enable_www_subdomain: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsApprunnerCustomDomainAssociationOutputSchema = z.object({
  certificate_validation_records: z.set(z.object({
    name: z.string(),
    status: z.string(),
    type: z.string(),
    value: z.string(),
  })).optional(),
  dns_target: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsApprunnerCustomDomainAssociationInputProps =
  & z.input<typeof AwsApprunnerCustomDomainAssociationInputSchema>
  & NodeProps

export type AwsApprunnerCustomDomainAssociationOutputProps =
  & z.output<typeof AwsApprunnerCustomDomainAssociationOutputSchema>
  & z.output<typeof AwsApprunnerCustomDomainAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_custom_domain_association

export function AwsApprunnerCustomDomainAssociation(
  props: Partial<AwsApprunnerCustomDomainAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_custom_domain_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerCustomDomainAssociationInputSchema}
      _outputSchema={AwsApprunnerCustomDomainAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerCustomDomainAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerCustomDomainAssociationOutputProps>(
    AwsApprunnerCustomDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerCustomDomainAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerCustomDomainAssociationOutputProps>(
    AwsApprunnerCustomDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )
