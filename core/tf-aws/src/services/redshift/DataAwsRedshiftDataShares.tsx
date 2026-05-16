import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRedshiftDataSharesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsRedshiftDataSharesOutputSchema = z.object({
  data_shares: z.object({
    data_share_arn: z.string(),
    managed_by: z.string(),
    producer_arn: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsRedshiftDataSharesInputProps =
  & z.input<typeof DataAwsRedshiftDataSharesInputSchema>
  & NodeProps

export type DataAwsRedshiftDataSharesOutputProps =
  & z.output<typeof DataAwsRedshiftDataSharesOutputSchema>
  & z.output<typeof DataAwsRedshiftDataSharesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/redshift_data_shares

export function DataAwsRedshiftDataShares(
  props: Partial<DataAwsRedshiftDataSharesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_data_shares'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRedshiftDataSharesInputSchema}
      _outputSchema={DataAwsRedshiftDataSharesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRedshiftDataSharess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRedshiftDataSharesOutputProps>(
    DataAwsRedshiftDataShares,
    idFilter,
    baseNode,
    optional,
  )
