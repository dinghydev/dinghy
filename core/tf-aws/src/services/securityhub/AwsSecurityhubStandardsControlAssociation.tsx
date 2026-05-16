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

export const AwsSecurityhubStandardsControlAssociationInputSchema = TfMetaSchema
  .extend({
    association_status: resolvableValue(z.string()),
    security_control_id: resolvableValue(z.string()),
    standards_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    updated_reason: resolvableValue(z.string().optional()),
  })

export const AwsSecurityhubStandardsControlAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsSecurityhubStandardsControlAssociationImportSchema = z.object({
  security_control_id: resolvableValue(z.string()),
  standards_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSecurityhubStandardsControlAssociationInputProps =
  & z.input<typeof AwsSecurityhubStandardsControlAssociationInputSchema>
  & z.input<typeof AwsSecurityhubStandardsControlAssociationImportSchema>
  & NodeProps

export type AwsSecurityhubStandardsControlAssociationOutputProps =
  & z.output<typeof AwsSecurityhubStandardsControlAssociationOutputSchema>
  & z.output<typeof AwsSecurityhubStandardsControlAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_standards_control_association

export function AwsSecurityhubStandardsControlAssociation(
  props: Partial<AwsSecurityhubStandardsControlAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_standards_control_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubStandardsControlAssociationInputSchema}
      _outputSchema={AwsSecurityhubStandardsControlAssociationOutputSchema}
      _importSchema={AwsSecurityhubStandardsControlAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubStandardsControlAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubStandardsControlAssociationOutputProps>(
    AwsSecurityhubStandardsControlAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubStandardsControlAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubStandardsControlAssociationOutputProps>(
    AwsSecurityhubStandardsControlAssociation,
    idFilter,
    baseNode,
    optional,
  )
