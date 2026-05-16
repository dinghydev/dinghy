import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafv2IpSet } from './AwsWafv2IpSet.tsx'

export const DataAwsWafv2IpSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWafv2IpSetOutputSchema = z.object({
  addresses: z.set(z.string()).optional(),
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  ip_address_version: z.string().optional(),
})

export type DataAwsWafv2IpSetInputProps =
  & z.input<typeof DataAwsWafv2IpSetInputSchema>
  & NodeProps

export type DataAwsWafv2IpSetOutputProps =
  & z.output<typeof DataAwsWafv2IpSetOutputSchema>
  & z.output<typeof DataAwsWafv2IpSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_ip_set

export function DataAwsWafv2IpSet(props: Partial<DataAwsWafv2IpSetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafv2IpSet
      _type='aws_wafv2_ip_set'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafv2IpSetInputSchema}
      _outputSchema={DataAwsWafv2IpSetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafv2IpSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafv2IpSetOutputProps>(
    DataAwsWafv2IpSet,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafv2IpSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafv2IpSetOutputProps>(
    DataAwsWafv2IpSet,
    idFilter,
    baseNode,
    optional,
  )
