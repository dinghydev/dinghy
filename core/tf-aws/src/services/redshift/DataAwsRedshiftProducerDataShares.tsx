import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/redshift_producer_data_shares

export const InputSchema = z.object({
  producer_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  data_shares: z.object({
    data_share_arn: z.string(),
    managed_by: z.string(),
    producer_arn: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRedshiftProducerDataShares(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_producer_data_shares'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRedshiftProducerDataSharess = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsRedshiftProducerDataShares, node, id)
