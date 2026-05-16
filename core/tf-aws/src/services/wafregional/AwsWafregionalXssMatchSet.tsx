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

export const AwsWafregionalXssMatchSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  xss_match_tuple: resolvableValue(
    z.object({
      text_transformation: z.string(),
      field_to_match: z.object({
        data: z.string().optional(),
        type: z.string(),
      }),
    }).array().optional(),
  ),
})

export const AwsWafregionalXssMatchSetOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsWafregionalXssMatchSetInputProps =
  & z.input<typeof AwsWafregionalXssMatchSetInputSchema>
  & NodeProps

export type AwsWafregionalXssMatchSetOutputProps =
  & z.output<typeof AwsWafregionalXssMatchSetOutputSchema>
  & z.output<typeof AwsWafregionalXssMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_xss_match_set

export function AwsWafregionalXssMatchSet(
  props: Partial<AwsWafregionalXssMatchSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_xss_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalXssMatchSetInputSchema}
      _outputSchema={AwsWafregionalXssMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalXssMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalXssMatchSetOutputProps>(
    AwsWafregionalXssMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalXssMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalXssMatchSetOutputProps>(
    AwsWafregionalXssMatchSet,
    idFilter,
    baseNode,
    optional,
  )
