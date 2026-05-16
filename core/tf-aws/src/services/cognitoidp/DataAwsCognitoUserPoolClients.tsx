import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCognitoUserPoolClientsInputSchema = TfMetaSchema.extend({
  user_pool_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCognitoUserPoolClientsOutputSchema = z.object({
  client_ids: z.string().array().optional(),
  client_names: z.string().array().optional(),
})

export type DataAwsCognitoUserPoolClientsInputProps =
  & z.input<typeof DataAwsCognitoUserPoolClientsInputSchema>
  & NodeProps

export type DataAwsCognitoUserPoolClientsOutputProps =
  & z.output<typeof DataAwsCognitoUserPoolClientsOutputSchema>
  & z.output<typeof DataAwsCognitoUserPoolClientsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cognito_user_pool_clients

export function DataAwsCognitoUserPoolClients(
  props: Partial<DataAwsCognitoUserPoolClientsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_clients'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCognitoUserPoolClientsInputSchema}
      _outputSchema={DataAwsCognitoUserPoolClientsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCognitoUserPoolClientss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCognitoUserPoolClientsOutputProps>(
    DataAwsCognitoUserPoolClients,
    idFilter,
    baseNode,
    optional,
  )
