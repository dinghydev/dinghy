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

export const AwsWafXssMatchSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  xss_match_tuples: resolvableValue(
    z.object({
      text_transformation: z.string(),
      field_to_match: z.object({
        data: z.string().optional(),
        type: z.string(),
      }),
    }).array().optional(),
  ),
})

export const AwsWafXssMatchSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafXssMatchSetInputProps =
  & z.input<typeof AwsWafXssMatchSetInputSchema>
  & NodeProps

export type AwsWafXssMatchSetOutputProps =
  & z.output<typeof AwsWafXssMatchSetOutputSchema>
  & z.output<typeof AwsWafXssMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_xss_match_set

export function AwsWafXssMatchSet(props: Partial<AwsWafXssMatchSetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_xss_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafXssMatchSetInputSchema}
      _outputSchema={AwsWafXssMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafXssMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafXssMatchSetOutputProps>(
    AwsWafXssMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafXssMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafXssMatchSetOutputProps>(
    AwsWafXssMatchSet,
    idFilter,
    baseNode,
    optional,
  )
