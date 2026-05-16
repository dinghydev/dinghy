import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCanonicalUserIdInputSchema = TfMetaSchema.extend({})

export const DataAwsCanonicalUserIdOutputSchema = z.object({
  display_name: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsCanonicalUserIdInputProps =
  & z.input<typeof DataAwsCanonicalUserIdInputSchema>
  & NodeProps

export type DataAwsCanonicalUserIdOutputProps =
  & z.output<typeof DataAwsCanonicalUserIdOutputSchema>
  & z.output<typeof DataAwsCanonicalUserIdInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/canonical_user_id

export function DataAwsCanonicalUserId(
  props: Partial<DataAwsCanonicalUserIdInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_canonical_user_id'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCanonicalUserIdInputSchema}
      _outputSchema={DataAwsCanonicalUserIdOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCanonicalUserId = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCanonicalUserIdOutputProps>(
    DataAwsCanonicalUserId,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCanonicalUserIds = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCanonicalUserIdOutputProps>(
    DataAwsCanonicalUserId,
    idFilter,
    baseNode,
    optional,
  )
