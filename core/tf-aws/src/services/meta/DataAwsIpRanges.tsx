import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIpRangesInputSchema = TfMetaSchema.extend({
  services: resolvableValue(z.string().array()),
  id: resolvableValue(z.string().optional()),
  regions: resolvableValue(z.string().array().optional()),
  url: resolvableValue(z.string().optional()),
})

export const DataAwsIpRangesOutputSchema = z.object({
  cidr_blocks: z.string().array().optional(),
  create_date: z.string().optional(),
  ipv6_cidr_blocks: z.string().array().optional(),
  sync_token: z.number().optional(),
})

export type DataAwsIpRangesInputProps =
  & z.input<typeof DataAwsIpRangesInputSchema>
  & NodeProps

export type DataAwsIpRangesOutputProps =
  & z.output<typeof DataAwsIpRangesOutputSchema>
  & z.output<typeof DataAwsIpRangesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ip_ranges

export function DataAwsIpRanges(props: Partial<DataAwsIpRangesInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ip_ranges'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIpRangesInputSchema}
      _outputSchema={DataAwsIpRangesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIpRangess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIpRangesOutputProps>(
    DataAwsIpRanges,
    idFilter,
    baseNode,
    optional,
  )
