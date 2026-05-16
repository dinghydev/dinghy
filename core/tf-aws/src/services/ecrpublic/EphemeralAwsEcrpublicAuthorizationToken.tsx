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

export const EphemeralAwsEcrpublicAuthorizationTokenInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
  })

export const EphemeralAwsEcrpublicAuthorizationTokenOutputSchema = z.object({
  authorization_token: z.string().optional(),
  expires_at: z.string().optional(),
  password: z.string().optional(),
  user_name: z.string().optional(),
})

export type EphemeralAwsEcrpublicAuthorizationTokenInputProps =
  & z.input<typeof EphemeralAwsEcrpublicAuthorizationTokenInputSchema>
  & NodeProps

export type EphemeralAwsEcrpublicAuthorizationTokenOutputProps =
  & z.output<typeof EphemeralAwsEcrpublicAuthorizationTokenOutputSchema>
  & z.output<typeof EphemeralAwsEcrpublicAuthorizationTokenInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/ecrpublic_authorization_token

export function EphemeralAwsEcrpublicAuthorizationToken(
  props: Partial<EphemeralAwsEcrpublicAuthorizationTokenInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecrpublic_authorization_token'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsEcrpublicAuthorizationTokenInputSchema}
      _outputSchema={EphemeralAwsEcrpublicAuthorizationTokenOutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsEcrpublicAuthorizationToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<EphemeralAwsEcrpublicAuthorizationTokenOutputProps>(
    EphemeralAwsEcrpublicAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsEcrpublicAuthorizationTokens = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<EphemeralAwsEcrpublicAuthorizationTokenOutputProps>(
    EphemeralAwsEcrpublicAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )
