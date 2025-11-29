import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/canonical_user_id

export const InputSchema = z.object({})

export const OutputSchema = z.object({
  display_name: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCanonicalUserId(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_canonical_user_id'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCanonicalUserId = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCanonicalUserId, node, id)

export const useDataAwsCanonicalUserIds = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCanonicalUserId, node, id)
