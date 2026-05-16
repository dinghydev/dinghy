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

export const AwsWafGeoMatchSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  geo_match_constraint: resolvableValue(
    z.object({
      type: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
})

export const AwsWafGeoMatchSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafGeoMatchSetInputProps =
  & z.input<typeof AwsWafGeoMatchSetInputSchema>
  & NodeProps

export type AwsWafGeoMatchSetOutputProps =
  & z.output<typeof AwsWafGeoMatchSetOutputSchema>
  & z.output<typeof AwsWafGeoMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_geo_match_set

export function AwsWafGeoMatchSet(props: Partial<AwsWafGeoMatchSetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_geo_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafGeoMatchSetInputSchema}
      _outputSchema={AwsWafGeoMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafGeoMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafGeoMatchSetOutputProps>(
    AwsWafGeoMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafGeoMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafGeoMatchSetOutputProps>(
    AwsWafGeoMatchSet,
    idFilter,
    baseNode,
    optional,
  )
