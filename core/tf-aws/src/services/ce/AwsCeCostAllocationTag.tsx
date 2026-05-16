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

export const AwsCeCostAllocationTagInputSchema = TfMetaSchema.extend({
  status: resolvableValue(z.string()),
  tag_key: resolvableValue(z.string()),
})

export const AwsCeCostAllocationTagOutputSchema = z.object({
  id: z.string().optional(),
  type: z.string().optional(),
})

export type AwsCeCostAllocationTagInputProps =
  & z.input<typeof AwsCeCostAllocationTagInputSchema>
  & NodeProps

export type AwsCeCostAllocationTagOutputProps =
  & z.output<typeof AwsCeCostAllocationTagOutputSchema>
  & z.output<typeof AwsCeCostAllocationTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ce_cost_allocation_tag

export function AwsCeCostAllocationTag(
  props: Partial<AwsCeCostAllocationTagInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_cost_allocation_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCeCostAllocationTagInputSchema}
      _outputSchema={AwsCeCostAllocationTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsCeCostAllocationTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCeCostAllocationTagOutputProps>(
    AwsCeCostAllocationTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCeCostAllocationTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCeCostAllocationTagOutputProps>(
    AwsCeCostAllocationTag,
    idFilter,
    baseNode,
    optional,
  )
