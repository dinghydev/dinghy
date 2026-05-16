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

export const DataAwsEcrpublicAuthorizationTokenInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsEcrpublicAuthorizationTokenOutputSchema = z.object({
  authorization_token: z.string().optional(),
  expires_at: z.string().optional(),
  id: z.string().optional(),
  password: z.string().optional(),
  user_name: z.string().optional(),
})

export type DataAwsEcrpublicAuthorizationTokenInputProps =
  & z.input<typeof DataAwsEcrpublicAuthorizationTokenInputSchema>
  & NodeProps

export type DataAwsEcrpublicAuthorizationTokenOutputProps =
  & z.output<typeof DataAwsEcrpublicAuthorizationTokenOutputSchema>
  & z.output<typeof DataAwsEcrpublicAuthorizationTokenInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecrpublic_authorization_token

export function DataAwsEcrpublicAuthorizationToken(
  props: Partial<DataAwsEcrpublicAuthorizationTokenInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecrpublic_authorization_token'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrpublicAuthorizationTokenInputSchema}
      _outputSchema={DataAwsEcrpublicAuthorizationTokenOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrpublicAuthorizationToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcrpublicAuthorizationTokenOutputProps>(
    DataAwsEcrpublicAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcrpublicAuthorizationTokens = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrpublicAuthorizationTokenOutputProps>(
    DataAwsEcrpublicAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )
