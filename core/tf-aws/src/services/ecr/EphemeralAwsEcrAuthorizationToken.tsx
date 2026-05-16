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

export const EphemeralAwsEcrAuthorizationTokenInputSchema = TfMetaSchema.extend(
  {
    region: resolvableValue(z.string().optional()),
  },
)

export const EphemeralAwsEcrAuthorizationTokenOutputSchema = z.object({
  authorization_token: z.string().optional(),
  expires_at: z.string().optional(),
  password: z.string().optional(),
  proxy_endpoint: z.string().optional(),
  user_name: z.string().optional(),
})

export type EphemeralAwsEcrAuthorizationTokenInputProps =
  & z.input<typeof EphemeralAwsEcrAuthorizationTokenInputSchema>
  & NodeProps

export type EphemeralAwsEcrAuthorizationTokenOutputProps =
  & z.output<typeof EphemeralAwsEcrAuthorizationTokenOutputSchema>
  & z.output<typeof EphemeralAwsEcrAuthorizationTokenInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/ecr_authorization_token

export function EphemeralAwsEcrAuthorizationToken(
  props: Partial<EphemeralAwsEcrAuthorizationTokenInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_authorization_token'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsEcrAuthorizationTokenInputSchema}
      _outputSchema={EphemeralAwsEcrAuthorizationTokenOutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsEcrAuthorizationToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<EphemeralAwsEcrAuthorizationTokenOutputProps>(
    EphemeralAwsEcrAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsEcrAuthorizationTokens = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<EphemeralAwsEcrAuthorizationTokenOutputProps>(
    EphemeralAwsEcrAuthorizationToken,
    idFilter,
    baseNode,
    optional,
  )
