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

export const AwsSesDomainIdentityVerificationInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSesDomainIdentityVerificationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSesDomainIdentityVerificationInputProps =
  & z.input<typeof AwsSesDomainIdentityVerificationInputSchema>
  & NodeProps

export type AwsSesDomainIdentityVerificationOutputProps =
  & z.output<typeof AwsSesDomainIdentityVerificationOutputSchema>
  & z.output<typeof AwsSesDomainIdentityVerificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_domain_identity_verification

export function AwsSesDomainIdentityVerification(
  props: Partial<AwsSesDomainIdentityVerificationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_domain_identity_verification'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesDomainIdentityVerificationInputSchema}
      _outputSchema={AwsSesDomainIdentityVerificationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesDomainIdentityVerification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesDomainIdentityVerificationOutputProps>(
    AwsSesDomainIdentityVerification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesDomainIdentityVerifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesDomainIdentityVerificationOutputProps>(
    AwsSesDomainIdentityVerification,
    idFilter,
    baseNode,
    optional,
  )
