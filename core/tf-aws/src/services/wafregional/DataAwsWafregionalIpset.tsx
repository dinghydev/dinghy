import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafregionalIpset } from './AwsWafregionalIpset.tsx'

export const DataAwsWafregionalIpsetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWafregionalIpsetOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafregionalIpsetInputProps =
  & z.input<typeof DataAwsWafregionalIpsetInputSchema>
  & NodeProps

export type DataAwsWafregionalIpsetOutputProps =
  & z.output<typeof DataAwsWafregionalIpsetOutputSchema>
  & z.output<typeof DataAwsWafregionalIpsetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafregional_ipset

export function DataAwsWafregionalIpset(
  props: Partial<DataAwsWafregionalIpsetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafregionalIpset
      _type='aws_wafregional_ipset'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafregionalIpsetInputSchema}
      _outputSchema={DataAwsWafregionalIpsetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafregionalIpset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafregionalIpsetOutputProps>(
    DataAwsWafregionalIpset,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafregionalIpsets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafregionalIpsetOutputProps>(
    DataAwsWafregionalIpset,
    idFilter,
    baseNode,
    optional,
  )
