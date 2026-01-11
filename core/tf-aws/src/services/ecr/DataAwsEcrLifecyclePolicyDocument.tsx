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
  rule: resolvableValue(
    z.object({
      description: z.string().optional(),
      priority: z.number(),
      action: z.object({
        target_storage_class: z.string().optional(),
        type: z.string(),
      }).array().optional(),
      selection: z.object({
        count_number: z.number(),
        count_type: z.string(),
        count_unit: z.string().optional(),
        storage_class: z.string().optional(),
        tag_pattern_list: z.string().array().optional(),
        tag_prefix_list: z.string().array().optional(),
        tag_status: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  json: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecr_lifecycle_policy_document

export function DataAwsEcrLifecyclePolicyDocument(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsEcrLifecyclePolicyDocument = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEcrLifecyclePolicyDocument,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcrLifecyclePolicyDocuments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEcrLifecyclePolicyDocument,
    idFilter,
    baseNode,
    optional,
  )
