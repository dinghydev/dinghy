import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/outposts_asset

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  asset_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  asset_type: z.string().optional(),
  host_id: z.string().optional(),
  rack_elevation: z.number().optional(),
  rack_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOutpostsAsset(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_asset'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsAsset = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsOutpostsAsset, node, id)

export const useDataAwsOutpostsAssets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsOutpostsAsset, node, id)
