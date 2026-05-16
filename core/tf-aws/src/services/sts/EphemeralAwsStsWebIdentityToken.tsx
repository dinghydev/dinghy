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

export const EphemeralAwsStsWebIdentityTokenInputSchema = TfMetaSchema.extend({
  audience: resolvableValue(z.string().array()),
  signing_algorithm: resolvableValue(z.string()),
  duration_seconds: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const EphemeralAwsStsWebIdentityTokenOutputSchema = z.object({
  expiration: z.string().optional(),
  web_identity_token: z.string().optional(),
})

export type EphemeralAwsStsWebIdentityTokenInputProps =
  & z.input<typeof EphemeralAwsStsWebIdentityTokenInputSchema>
  & NodeProps

export type EphemeralAwsStsWebIdentityTokenOutputProps =
  & z.output<typeof EphemeralAwsStsWebIdentityTokenOutputSchema>
  & z.output<typeof EphemeralAwsStsWebIdentityTokenInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/sts_web_identity_token

export function EphemeralAwsStsWebIdentityToken(
  props: Partial<EphemeralAwsStsWebIdentityTokenInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sts_web_identity_token'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsStsWebIdentityTokenInputSchema}
      _outputSchema={EphemeralAwsStsWebIdentityTokenOutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsStsWebIdentityToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<EphemeralAwsStsWebIdentityTokenOutputProps>(
    EphemeralAwsStsWebIdentityToken,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsStsWebIdentityTokens = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<EphemeralAwsStsWebIdentityTokenOutputProps>(
    EphemeralAwsStsWebIdentityToken,
    idFilter,
    baseNode,
    optional,
  )
