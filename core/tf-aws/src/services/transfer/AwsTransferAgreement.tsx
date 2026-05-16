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

export const AwsTransferAgreementInputSchema = TfMetaSchema.extend({
  access_role: resolvableValue(z.string()),
  base_directory: resolvableValue(z.string()),
  local_profile_id: resolvableValue(z.string()),
  partner_profile_id: resolvableValue(z.string()),
  server_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsTransferAgreementOutputSchema = z.object({
  agreement_id: z.string().optional(),
  arn: z.string().optional(),
  status: z.string().optional(),
})

export type AwsTransferAgreementInputProps =
  & z.input<typeof AwsTransferAgreementInputSchema>
  & NodeProps

export type AwsTransferAgreementOutputProps =
  & z.output<typeof AwsTransferAgreementOutputSchema>
  & z.output<typeof AwsTransferAgreementInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_agreement

export function AwsTransferAgreement(
  props: Partial<AwsTransferAgreementInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_agreement'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferAgreementInputSchema}
      _outputSchema={AwsTransferAgreementOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferAgreement = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferAgreementOutputProps>(
    AwsTransferAgreement,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferAgreements = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferAgreementOutputProps>(
    AwsTransferAgreement,
    idFilter,
    baseNode,
    optional,
  )
