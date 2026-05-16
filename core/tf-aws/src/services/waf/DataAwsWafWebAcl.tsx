import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafWebAcl } from './AwsWafWebAcl.tsx'

export const DataAwsWafWebAclInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
})

export const DataAwsWafWebAclOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafWebAclInputProps =
  & z.input<typeof DataAwsWafWebAclInputSchema>
  & NodeProps

export type DataAwsWafWebAclOutputProps =
  & z.output<typeof DataAwsWafWebAclOutputSchema>
  & z.output<typeof DataAwsWafWebAclInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/waf_web_acl

export function DataAwsWafWebAcl(props: Partial<DataAwsWafWebAclInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafWebAcl
      _type='aws_waf_web_acl'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafWebAclInputSchema}
      _outputSchema={DataAwsWafWebAclOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafWebAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafWebAclOutputProps>(
    DataAwsWafWebAcl,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafWebAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafWebAclOutputProps>(
    DataAwsWafWebAcl,
    idFilter,
    baseNode,
    optional,
  )
