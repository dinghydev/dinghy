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

export const InputSchema = TfMetaSchema.extend({
  audience: resolvableValue(z.string().array()),
  signing_algorithm: resolvableValue(z.string()),
  duration_seconds: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  expiration: z.string().optional(),
  web_identity_token: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/sts_web_identity_token

export function EphemeralAwsStsWebIdentityToken(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sts_web_identity_token'
      _category='ephemeral'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsStsWebIdentityToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    EphemeralAwsStsWebIdentityToken,
    idFilter,
    baseNode,
    optional,
  )
