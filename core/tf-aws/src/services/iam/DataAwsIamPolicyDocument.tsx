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
      condition: z.object({
        test: z.string(),
        values: z.string().array(),
        variable: z.string(),
      }).array().optional(),
      not_principals: z.object({
        identifiers: z.string().array(),
        type: z.string(),
      }).array().optional(),
      principals: z.object({
        identifiers: z.string().array(),
        type: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  version: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_policy_document

export function DataAwsIamPolicyDocument(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsIamPolicyDocument = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsIamPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamPolicyDocuments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsIamPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )
