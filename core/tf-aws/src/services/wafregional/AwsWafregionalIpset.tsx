import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsWafregionalIpsetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  ip_set_descriptor: resolvableValue(
    z.object({
      type: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsWafregionalIpsetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafregionalIpsetInputProps =
  & z.input<typeof AwsWafregionalIpsetInputSchema>
  & NodeProps

export type AwsWafregionalIpsetOutputProps =
  & z.output<typeof AwsWafregionalIpsetOutputSchema>
  & z.output<typeof AwsWafregionalIpsetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_ipset

export function AwsWafregionalIpset(
  props: Partial<AwsWafregionalIpsetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_ipset'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalIpsetInputSchema}
      _outputSchema={AwsWafregionalIpsetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalIpset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalIpsetOutputProps>(
    AwsWafregionalIpset,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalIpsets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalIpsetOutputProps>(
    AwsWafregionalIpset,
    idFilter,
    baseNode,
    optional,
  )
