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

export const AwsAmplifyDomainAssociationInputSchema = TfMetaSchema.extend({
  app_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  sub_domain: resolvableValue(
    z.object({
      branch_name: z.string(),
      dns_record: z.string().optional(),
      prefix: z.string(),
      verified: z.boolean().optional(),
    }).array(),
  ),
  certificate_settings: resolvableValue(
    z.object({
      certificate_verification_dns_record: z.string().optional(),
      custom_certificate_arn: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  enable_auto_sub_domain: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  wait_for_verification: resolvableValue(z.boolean().optional()),
})

export const AwsAmplifyDomainAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  certificate_verification_dns_record: z.string().optional(),
})

export type AwsAmplifyDomainAssociationInputProps =
  & z.input<typeof AwsAmplifyDomainAssociationInputSchema>
  & NodeProps

export type AwsAmplifyDomainAssociationOutputProps =
  & z.output<typeof AwsAmplifyDomainAssociationOutputSchema>
  & z.output<typeof AwsAmplifyDomainAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/amplify_domain_association

export function AwsAmplifyDomainAssociation(
  props: Partial<AwsAmplifyDomainAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_amplify_domain_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAmplifyDomainAssociationInputSchema}
      _outputSchema={AwsAmplifyDomainAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAmplifyDomainAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAmplifyDomainAssociationOutputProps>(
    AwsAmplifyDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAmplifyDomainAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAmplifyDomainAssociationOutputProps>(
    AwsAmplifyDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )
