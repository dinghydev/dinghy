import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCallerIdentityInputSchema = TfMetaSchema.extend({})

export const DataAwsCallerIdentityOutputSchema = z.object({
  account_id: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  user_id: z.string().optional(),
})

export type DataAwsCallerIdentityInputProps =
  & z.input<typeof DataAwsCallerIdentityInputSchema>
  & NodeProps

export type DataAwsCallerIdentityOutputProps =
  & z.output<typeof DataAwsCallerIdentityOutputSchema>
  & z.output<typeof DataAwsCallerIdentityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/caller_identity

export function DataAwsCallerIdentity(
  props: Partial<DataAwsCallerIdentityInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_caller_identity'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCallerIdentityInputSchema}
      _outputSchema={DataAwsCallerIdentityOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCallerIdentity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCallerIdentityOutputProps>(
    DataAwsCallerIdentity,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCallerIdentitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCallerIdentityOutputProps>(
    DataAwsCallerIdentity,
    idFilter,
    baseNode,
    optional,
  )
