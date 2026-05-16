import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafv2WebAcl } from './AwsWafv2WebAcl.tsx'

export const DataAwsWafv2WebAclInputSchema = TfMetaSchema.extend({
  scope: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_arn: resolvableValue(z.string().optional()),
})

export const DataAwsWafv2WebAclOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsWafv2WebAclInputProps =
  & z.input<typeof DataAwsWafv2WebAclInputSchema>
  & NodeProps

export type DataAwsWafv2WebAclOutputProps =
  & z.output<typeof DataAwsWafv2WebAclOutputSchema>
  & z.output<typeof DataAwsWafv2WebAclInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_web_acl

export function DataAwsWafv2WebAcl(
  props: Partial<DataAwsWafv2WebAclInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafv2WebAcl
      _type='aws_wafv2_web_acl'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafv2WebAclInputSchema}
      _outputSchema={DataAwsWafv2WebAclOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafv2WebAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafv2WebAclOutputProps>(
    DataAwsWafv2WebAcl,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafv2WebAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafv2WebAclOutputProps>(
    DataAwsWafv2WebAcl,
    idFilter,
    baseNode,
    optional,
  )
