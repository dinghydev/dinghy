import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCognitoUserPoolsInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCognitoUserPoolsOutputSchema = z.object({
  arns: z.string().array().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsCognitoUserPoolsInputProps =
  & z.input<typeof DataAwsCognitoUserPoolsInputSchema>
  & NodeProps

export type DataAwsCognitoUserPoolsOutputProps =
  & z.output<typeof DataAwsCognitoUserPoolsOutputSchema>
  & z.output<typeof DataAwsCognitoUserPoolsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cognito_user_pools

export function DataAwsCognitoUserPools(
  props: Partial<DataAwsCognitoUserPoolsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pools'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCognitoUserPoolsInputSchema}
      _outputSchema={DataAwsCognitoUserPoolsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCognitoUserPoolss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCognitoUserPoolsOutputProps>(
    DataAwsCognitoUserPools,
    idFilter,
    baseNode,
    optional,
  )
