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

export const AwsVpclatticeDomainVerificationInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsVpclatticeDomainVerificationOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  last_verified_time: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  txt_record_name: z.string().optional(),
  txt_record_value: z.string().optional(),
})

export type AwsVpclatticeDomainVerificationInputProps =
  & z.input<typeof AwsVpclatticeDomainVerificationInputSchema>
  & NodeProps

export type AwsVpclatticeDomainVerificationOutputProps =
  & z.output<typeof AwsVpclatticeDomainVerificationOutputSchema>
  & z.output<typeof AwsVpclatticeDomainVerificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_domain_verification

export function AwsVpclatticeDomainVerification(
  props: Partial<AwsVpclatticeDomainVerificationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_domain_verification'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeDomainVerificationInputSchema}
      _outputSchema={AwsVpclatticeDomainVerificationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeDomainVerification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeDomainVerificationOutputProps>(
    AwsVpclatticeDomainVerification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeDomainVerifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeDomainVerificationOutputProps>(
    AwsVpclatticeDomainVerification,
    idFilter,
    baseNode,
    optional,
  )
