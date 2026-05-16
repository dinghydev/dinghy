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

export const AwsRedshiftPartnerInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  cluster_identifier: resolvableValue(z.string()),
  database_name: resolvableValue(z.string()),
  partner_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRedshiftPartnerOutputSchema = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
})

export type AwsRedshiftPartnerInputProps =
  & z.input<typeof AwsRedshiftPartnerInputSchema>
  & NodeProps

export type AwsRedshiftPartnerOutputProps =
  & z.output<typeof AwsRedshiftPartnerOutputSchema>
  & z.output<typeof AwsRedshiftPartnerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_partner

export function AwsRedshiftPartner(
  props: Partial<AwsRedshiftPartnerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_partner'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftPartnerInputSchema}
      _outputSchema={AwsRedshiftPartnerOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftPartner = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftPartnerOutputProps>(
    AwsRedshiftPartner,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftPartners = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftPartnerOutputProps>(
    AwsRedshiftPartner,
    idFilter,
    baseNode,
    optional,
  )
