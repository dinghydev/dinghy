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

export const DataAwsCodeartifactAuthorizationTokenInputSchema = TfMetaSchema
  .extend({
    domain: resolvableValue(z.string()),
    domain_owner: resolvableValue(z.string().optional()),
    duration_seconds: resolvableValue(z.number().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsCodeartifactAuthorizationTokenOutputSchema = z.object({
  authorization_token: z.string().optional(),
  expiration: z.string().optional(),
})

export type DataAwsCodeartifactAuthorizationTokenInputProps =
  & z.input<typeof DataAwsCodeartifactAuthorizationTokenInputSchema>
  & NodeProps

export type DataAwsCodeartifactAuthorizationTokenOutputProps =
  & z.output<typeof DataAwsCodeartifactAuthorizationTokenOutputSchema>
  & z.output<typeof DataAwsCodeartifactAuthorizationTokenInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/codeartifact_authorization_token

export function DataAwsCodeartifactAuthorizationToken(
  props: Partial<DataAwsCodeartifactAuthorizationTokenInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_authorization_token'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCodeartifactAuthorizationTokenInputSchema}
      _outputSchema={DataAwsCodeartifactAuthorizationTokenOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCodeartifactAuthorizationToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCodeartifactAuthorizationTokenOutputProps>(
    DataAwsCodeartifactAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCodeartifactAuthorizationTokens = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCodeartifactAuthorizationTokenOutputProps>(
    DataAwsCodeartifactAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )
