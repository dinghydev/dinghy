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

export const AwsWafIpsetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  ip_set_descriptors: resolvableValue(
    z.object({
      type: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
})

export const AwsWafIpsetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafIpsetInputProps =
  & z.input<typeof AwsWafIpsetInputSchema>
  & NodeProps

export type AwsWafIpsetOutputProps =
  & z.output<typeof AwsWafIpsetOutputSchema>
  & z.output<typeof AwsWafIpsetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_ipset

export function AwsWafIpset(props: Partial<AwsWafIpsetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_ipset'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafIpsetInputSchema}
      _outputSchema={AwsWafIpsetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafIpset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafIpsetOutputProps>(
    AwsWafIpset,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafIpsets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafIpsetOutputProps>(
    AwsWafIpset,
    idFilter,
    baseNode,
    optional,
  )
