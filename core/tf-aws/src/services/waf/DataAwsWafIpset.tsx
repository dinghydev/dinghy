import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafIpset } from './AwsWafIpset.tsx'

export const DataAwsWafIpsetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
})

export const DataAwsWafIpsetOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafIpsetInputProps =
  & z.input<typeof DataAwsWafIpsetInputSchema>
  & NodeProps

export type DataAwsWafIpsetOutputProps =
  & z.output<typeof DataAwsWafIpsetOutputSchema>
  & z.output<typeof DataAwsWafIpsetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/waf_ipset

export function DataAwsWafIpset(props: Partial<DataAwsWafIpsetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafIpset
      _type='aws_waf_ipset'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafIpsetInputSchema}
      _outputSchema={DataAwsWafIpsetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafIpset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafIpsetOutputProps>(
    DataAwsWafIpset,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafIpsets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafIpsetOutputProps>(
    DataAwsWafIpset,
    idFilter,
    baseNode,
    optional,
  )
