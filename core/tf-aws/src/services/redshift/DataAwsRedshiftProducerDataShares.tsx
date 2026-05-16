import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRedshiftProducerDataSharesInputSchema = TfMetaSchema.extend(
  {
    producer_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    status: resolvableValue(z.string().optional()),
  },
)

export const DataAwsRedshiftProducerDataSharesOutputSchema = z.object({
  data_shares: z.object({
    data_share_arn: z.string(),
    managed_by: z.string(),
    producer_arn: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsRedshiftProducerDataSharesInputProps =
  & z.input<typeof DataAwsRedshiftProducerDataSharesInputSchema>
  & NodeProps

export type DataAwsRedshiftProducerDataSharesOutputProps =
  & z.output<typeof DataAwsRedshiftProducerDataSharesOutputSchema>
  & z.output<typeof DataAwsRedshiftProducerDataSharesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/redshift_producer_data_shares

export function DataAwsRedshiftProducerDataShares(
  props: Partial<DataAwsRedshiftProducerDataSharesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_producer_data_shares'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRedshiftProducerDataSharesInputSchema}
      _outputSchema={DataAwsRedshiftProducerDataSharesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRedshiftProducerDataSharess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRedshiftProducerDataSharesOutputProps>(
    DataAwsRedshiftProducerDataShares,
    idFilter,
    baseNode,
    optional,
  )
