import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_policy_document

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  override_json: resolvableValue(z.string().optional()),
  override_policy_documents: resolvableValue(z.string().array().optional()),
  policy_id: resolvableValue(z.string().optional()),
  source_json: resolvableValue(z.string().optional()),
  source_policy_documents: resolvableValue(z.string().array().optional()),
  statement: resolvableValue(
    z.object({
      actions: z.string().array().optional(),
      effect: z.string().optional(),
      not_actions: z.string().array().optional(),
      not_resources: z.string().array().optional(),
      resources: z.string().array().optional(),
      sid: z.string().optional(),
    }).optional(),
  ),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  json: z.string().optional(),
  minified_json: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamPolicyDocument(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_policy_document'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamPolicyDocument = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamPolicyDocument, node, id)

export const useDataAwsIamPolicyDocuments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamPolicyDocument, node, id)
