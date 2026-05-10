import {
  camelCaseToWords,
  type NodeProps,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamOutboundWebIdentityFederation } from './AwsIamOutboundWebIdentityFederation.tsx'

export const InputSchema = TfMetaSchema.extend({})

export const OutputSchema = z.object({
  issuer_identifier: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_outbound_web_identity_federation

export function DataAwsIamOutboundWebIdentityFederation(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamOutboundWebIdentityFederation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsIamOutboundWebIdentityFederation,
    idFilter,
    baseNode,
    optional,
  )
