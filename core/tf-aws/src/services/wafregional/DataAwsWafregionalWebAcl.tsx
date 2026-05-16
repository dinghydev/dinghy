import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafregionalWebAcl } from './AwsWafregionalWebAcl.tsx'

export const DataAwsWafregionalWebAclInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWafregionalWebAclOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafregionalWebAclInputProps =
  & z.input<typeof DataAwsWafregionalWebAclInputSchema>
  & NodeProps

export type DataAwsWafregionalWebAclOutputProps =
  & z.output<typeof DataAwsWafregionalWebAclOutputSchema>
  & z.output<typeof DataAwsWafregionalWebAclInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafregional_web_acl

export function DataAwsWafregionalWebAcl(
  props: Partial<DataAwsWafregionalWebAclInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafregionalWebAcl
      _type='aws_wafregional_web_acl'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafregionalWebAclInputSchema}
      _outputSchema={DataAwsWafregionalWebAclOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafregionalWebAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafregionalWebAclOutputProps>(
    DataAwsWafregionalWebAcl,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafregionalWebAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafregionalWebAclOutputProps>(
    DataAwsWafregionalWebAcl,
    idFilter,
    baseNode,
    optional,
  )
