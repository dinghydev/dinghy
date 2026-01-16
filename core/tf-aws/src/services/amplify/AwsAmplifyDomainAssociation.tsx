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
  app_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  sub_domain: resolvableValue(
    z.object({
      branch_name: z.string(),
      dns_record: z.string().optional(),
      prefix: z.string(),
      verified: z.boolean().optional(),
    }).array(),
  ),
  certificate_settings: resolvableValue(
    z.object({
      certificate_verification_dns_record: z.string().optional(),
      custom_certificate_arn: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  enable_auto_sub_domain: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  wait_for_verification: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate_verification_dns_record: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/amplify_domain_association

export function AwsAmplifyDomainAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_amplify_domain_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAmplifyDomainAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsAmplifyDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAmplifyDomainAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsAmplifyDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )
