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

export const DataAwsIamSessionContextInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsIamSessionContextOutputSchema = z.object({
  issuer_arn: z.string().optional(),
  issuer_id: z.string().optional(),
  issuer_name: z.string().optional(),
  session_name: z.string().optional(),
})

export type DataAwsIamSessionContextInputProps =
  & z.input<typeof DataAwsIamSessionContextInputSchema>
  & NodeProps

export type DataAwsIamSessionContextOutputProps =
  & z.output<typeof DataAwsIamSessionContextOutputSchema>
  & z.output<typeof DataAwsIamSessionContextInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_session_context

export function DataAwsIamSessionContext(
  props: Partial<DataAwsIamSessionContextInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_session_context'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamSessionContextInputSchema}
      _outputSchema={DataAwsIamSessionContextOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamSessionContext = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamSessionContextOutputProps>(
    DataAwsIamSessionContext,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamSessionContexts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamSessionContextOutputProps>(
    DataAwsIamSessionContext,
    idFilter,
    baseNode,
    optional,
  )
