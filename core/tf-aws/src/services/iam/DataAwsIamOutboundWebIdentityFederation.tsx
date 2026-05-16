import {
  camelCaseToWords,
  type NodeProps,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamOutboundWebIdentityFederation } from './AwsIamOutboundWebIdentityFederation.tsx'

export const DataAwsIamOutboundWebIdentityFederationInputSchema = TfMetaSchema
  .extend({})

export const DataAwsIamOutboundWebIdentityFederationOutputSchema = z.object({
  issuer_identifier: z.string().optional(),
})

export type DataAwsIamOutboundWebIdentityFederationInputProps =
  & z.input<typeof DataAwsIamOutboundWebIdentityFederationInputSchema>
  & NodeProps

export type DataAwsIamOutboundWebIdentityFederationOutputProps =
  & z.output<typeof DataAwsIamOutboundWebIdentityFederationOutputSchema>
  & z.output<typeof DataAwsIamOutboundWebIdentityFederationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_outbound_web_identity_federation

export function DataAwsIamOutboundWebIdentityFederation(
  props: Partial<DataAwsIamOutboundWebIdentityFederationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamOutboundWebIdentityFederation
      _type='aws_iam_outbound_web_identity_federation'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamOutboundWebIdentityFederationInputSchema}
      _outputSchema={DataAwsIamOutboundWebIdentityFederationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamOutboundWebIdentityFederation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamOutboundWebIdentityFederationOutputProps>(
    DataAwsIamOutboundWebIdentityFederation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamOutboundWebIdentityFederations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamOutboundWebIdentityFederationOutputProps>(
    DataAwsIamOutboundWebIdentityFederation,
    idFilter,
    baseNode,
    optional,
  )
