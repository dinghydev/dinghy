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

export const AwsWafByteMatchSetInputSchema = TfMetaSchema.extend({
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
})

export const AwsWafByteMatchSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafByteMatchSetInputProps =
  & z.input<typeof AwsWafByteMatchSetInputSchema>
  & NodeProps

export type AwsWafByteMatchSetOutputProps =
  & z.output<typeof AwsWafByteMatchSetOutputSchema>
  & z.output<typeof AwsWafByteMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_byte_match_set

export function AwsWafByteMatchSet(
  props: Partial<AwsWafByteMatchSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_byte_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafByteMatchSetInputSchema}
      _outputSchema={AwsWafByteMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafByteMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafByteMatchSetOutputProps>(
    AwsWafByteMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafByteMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafByteMatchSetOutputProps>(
    AwsWafByteMatchSet,
    idFilter,
    baseNode,
    optional,
  )
