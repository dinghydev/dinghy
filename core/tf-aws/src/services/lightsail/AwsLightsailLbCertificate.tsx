import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_lb_certificate

export const InputSchema = z.object({
  lb_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subject_alternative_names: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  domain_validation_records: z.object({
    domain_name: z.string(),
    resource_record_name: z.string(),
    resource_record_type: z.string(),
    resource_record_value: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  support_code: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailLbCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLightsailLbCertificate, node, id)

export const useAwsLightsailLbCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLightsailLbCertificate, node, id)
