import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_ca_certificate

export const InputSchema = z.object({
  active: resolvableValue(z.boolean()),
  allow_auto_registration: resolvableValue(z.boolean()),
  ca_certificate_pem: resolvableValue(z.string()),
  certificate_mode: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  registration_config: resolvableValue(
    z.object({
      role_arn: z.string().optional(),
      template_body: z.string().optional(),
      template_name: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  verification_certificate_pem: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  customer_version: z.number().optional(),
  generation_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  validity: z.object({
    not_after: z.string(),
    not_before: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotCaCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_ca_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotCaCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotCaCertificate, node, id)

export const useAwsIotCaCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotCaCertificate, node, id)
