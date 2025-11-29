import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/amplify_domain_association

export const InputSchema = z.object({
  app_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  sub_domain: resolvableValue(
    z.object({
      branch_name: z.string(),
      dns_record: z.string(),
      prefix: z.string(),
      verified: z.boolean(),
    }).array(),
  ),
  certificate_settings: resolvableValue(
    z.object({
      certificate_verification_dns_record: z.string(),
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

export function AwsAmplifyDomainAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsAmplifyDomainAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAmplifyDomainAssociation, node, id)

export const useAwsAmplifyDomainAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAmplifyDomainAssociation, node, id)
