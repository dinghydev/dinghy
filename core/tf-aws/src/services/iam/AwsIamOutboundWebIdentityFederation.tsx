import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({}).extend({ ...TfMetaSchema.shape })

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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_outbound_web_identity_federation

export function AwsIamOutboundWebIdentityFederation(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamOutboundWebIdentityFederation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsIamOutboundWebIdentityFederation,
    idFilter,
    baseNode,
    optional,
  )
