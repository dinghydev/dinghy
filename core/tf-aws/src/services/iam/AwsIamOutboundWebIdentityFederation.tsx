import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIamOutboundWebIdentityFederationInputSchema = TfMetaSchema
  .extend({})

export const AwsIamOutboundWebIdentityFederationOutputSchema = z.object({
  issuer_identifier: z.string().optional(),
})

export type AwsIamOutboundWebIdentityFederationInputProps =
  & z.input<typeof AwsIamOutboundWebIdentityFederationInputSchema>
  & NodeProps

export type AwsIamOutboundWebIdentityFederationOutputProps =
  & z.output<typeof AwsIamOutboundWebIdentityFederationOutputSchema>
  & z.output<typeof AwsIamOutboundWebIdentityFederationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_outbound_web_identity_federation

export function AwsIamOutboundWebIdentityFederation(
  props: Partial<AwsIamOutboundWebIdentityFederationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_outbound_web_identity_federation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamOutboundWebIdentityFederationInputSchema}
      _outputSchema={AwsIamOutboundWebIdentityFederationOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamOutboundWebIdentityFederation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamOutboundWebIdentityFederationOutputProps>(
    AwsIamOutboundWebIdentityFederation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamOutboundWebIdentityFederations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamOutboundWebIdentityFederationOutputProps>(
    AwsIamOutboundWebIdentityFederation,
    idFilter,
    baseNode,
    optional,
  )
