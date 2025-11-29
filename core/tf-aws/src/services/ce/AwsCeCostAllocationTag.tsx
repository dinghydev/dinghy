import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ce_cost_allocation_tag

export const InputSchema = z.object({
  status: resolvableValue(z.string()),
  tag_key: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCeCostAllocationTag(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_cost_allocation_tag'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCeCostAllocationTag = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCeCostAllocationTag, node, id)

export const useAwsCeCostAllocationTags = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCeCostAllocationTag, node, id)
