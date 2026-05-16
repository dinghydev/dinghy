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

export const DataAwsEcrAuthorizationTokenInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  registry_id: resolvableValue(z.string().optional()),
})

export const DataAwsEcrAuthorizationTokenOutputSchema = z.object({
  authorization_token: z.string().optional(),
  expires_at: z.string().optional(),
  id: z.string().optional(),
  password: z.string().optional(),
  proxy_endpoint: z.string().optional(),
  user_name: z.string().optional(),
})

export type DataAwsEcrAuthorizationTokenInputProps =
  & z.input<typeof DataAwsEcrAuthorizationTokenInputSchema>
  & NodeProps

export type DataAwsEcrAuthorizationTokenOutputProps =
  & z.output<typeof DataAwsEcrAuthorizationTokenOutputSchema>
  & z.output<typeof DataAwsEcrAuthorizationTokenInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecr_authorization_token

export function DataAwsEcrAuthorizationToken(
  props: Partial<DataAwsEcrAuthorizationTokenInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_authorization_token'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrAuthorizationTokenInputSchema}
      _outputSchema={DataAwsEcrAuthorizationTokenOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrAuthorizationToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcrAuthorizationTokenOutputProps>(
    DataAwsEcrAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcrAuthorizationTokens = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrAuthorizationTokenOutputProps>(
    DataAwsEcrAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )
