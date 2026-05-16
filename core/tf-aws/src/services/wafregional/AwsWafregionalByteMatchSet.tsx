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

export const AwsWafregionalByteMatchSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  byte_match_tuples: resolvableValue(
    z.object({
      positional_constraint: z.string(),
      target_string: z.string().optional(),
      text_transformation: z.string(),
      field_to_match: z.object({
        data: z.string().optional(),
        type: z.string(),
      }),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsWafregionalByteMatchSetOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsWafregionalByteMatchSetInputProps =
  & z.input<typeof AwsWafregionalByteMatchSetInputSchema>
  & NodeProps

export type AwsWafregionalByteMatchSetOutputProps =
  & z.output<typeof AwsWafregionalByteMatchSetOutputSchema>
  & z.output<typeof AwsWafregionalByteMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_byte_match_set

export function AwsWafregionalByteMatchSet(
  props: Partial<AwsWafregionalByteMatchSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_byte_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalByteMatchSetInputSchema}
      _outputSchema={AwsWafregionalByteMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalByteMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalByteMatchSetOutputProps>(
    AwsWafregionalByteMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalByteMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalByteMatchSetOutputProps>(
    AwsWafregionalByteMatchSet,
    idFilter,
    baseNode,
    optional,
  )
