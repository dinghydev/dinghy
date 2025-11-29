import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/caller_identity

export const InputSchema = z.object({})

export const OutputSchema = z.object({
  account_id: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  user_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCallerIdentity(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_caller_identity'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCallerIdentity = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCallerIdentity, node, id)

export const useDataAwsCallerIdentitys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCallerIdentity, node, id)
