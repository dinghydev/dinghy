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

export const AwsRedshiftDataShareConsumerAssociationInputSchema = TfMetaSchema
  .extend({
    data_share_arn: resolvableValue(z.string()),
    allow_writes: resolvableValue(z.boolean().optional()),
    associate_entire_account: resolvableValue(z.boolean().optional()),
    consumer_arn: resolvableValue(z.string().optional()),
    consumer_region: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsRedshiftDataShareConsumerAssociationOutputSchema = z.object({
  id: z.string().optional(),
  managed_by: z.string().optional(),
  producer_arn: z.string().optional(),
})

export type AwsRedshiftDataShareConsumerAssociationInputProps =
  & z.input<typeof AwsRedshiftDataShareConsumerAssociationInputSchema>
  & NodeProps

export type AwsRedshiftDataShareConsumerAssociationOutputProps =
  & z.output<typeof AwsRedshiftDataShareConsumerAssociationOutputSchema>
  & z.output<typeof AwsRedshiftDataShareConsumerAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_data_share_consumer_association

export function AwsRedshiftDataShareConsumerAssociation(
  props: Partial<AwsRedshiftDataShareConsumerAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_data_share_consumer_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftDataShareConsumerAssociationInputSchema}
      _outputSchema={AwsRedshiftDataShareConsumerAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftDataShareConsumerAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftDataShareConsumerAssociationOutputProps>(
    AwsRedshiftDataShareConsumerAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftDataShareConsumerAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftDataShareConsumerAssociationOutputProps>(
    AwsRedshiftDataShareConsumerAssociation,
    idFilter,
    baseNode,
    optional,
  )
