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

export const DataAwsEcrLifecyclePolicyDocumentInputSchema = TfMetaSchema.extend(
  {
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
  },
)

export const DataAwsEcrLifecyclePolicyDocumentOutputSchema = z.object({
  json: z.string().optional(),
})

export type DataAwsEcrLifecyclePolicyDocumentInputProps =
  & z.input<typeof DataAwsEcrLifecyclePolicyDocumentInputSchema>
  & NodeProps

export type DataAwsEcrLifecyclePolicyDocumentOutputProps =
  & z.output<typeof DataAwsEcrLifecyclePolicyDocumentOutputSchema>
  & z.output<typeof DataAwsEcrLifecyclePolicyDocumentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecr_lifecycle_policy_document

export function DataAwsEcrLifecyclePolicyDocument(
  props: Partial<DataAwsEcrLifecyclePolicyDocumentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_lifecycle_policy_document'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrLifecyclePolicyDocumentInputSchema}
      _outputSchema={DataAwsEcrLifecyclePolicyDocumentOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrLifecyclePolicyDocument = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcrLifecyclePolicyDocumentOutputProps>(
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
  useTypedNodes<DataAwsEcrLifecyclePolicyDocumentOutputProps>(
    DataAwsEcrLifecyclePolicyDocument,
    idFilter,
    baseNode,
    optional,
  )
