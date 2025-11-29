import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecr_lifecycle_policy_document

export const InputSchema = z.object({
  rule: resolvableValue(
    z.object({
      description: z.string().optional(),
      priority: z.number(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  json: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcrLifecyclePolicyDocument(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_lifecycle_policy_document'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrLifecyclePolicyDocument = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEcrLifecyclePolicyDocument, node, id)

export const useDataAwsEcrLifecyclePolicyDocuments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsEcrLifecyclePolicyDocument, node, id)
