import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafregional_geo_match_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  geo_match_constraint: resolvableValue(
    z.object({
      type: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafregionalGeoMatchSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_geo_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalGeoMatchSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafregionalGeoMatchSet, node, id)

export const useAwsWafregionalGeoMatchSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafregionalGeoMatchSet, node, id)
