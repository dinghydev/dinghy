import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesv2EmailIdentity } from './AwsSesv2EmailIdentity.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sesv2_email_identity

export const InputSchema = z.object({
  configuration_set_name: resolvableValue(z.string()),
  email_identity: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dkim_signing_attributes: z.object({
    current_signing_key_length: z.string(),
    domain_signing_private_key: z.string(),
    domain_signing_selector: z.string(),
    last_key_generation_timestamp: z.string(),
    next_signing_key_length: z.string(),
    signing_attributes_origin: z.string(),
    status: z.string(),
    tokens: z.string().array(),
  }).array().optional(),
  identity_type: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  verification_status: z.string().optional(),
  verified_for_sending_status: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSesv2EmailIdentity(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSesv2EmailIdentity
      _type='aws_sesv2_email_identity'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesv2EmailIdentity = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSesv2EmailIdentity, node, id)

export const useDataAwsSesv2EmailIdentitys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSesv2EmailIdentity, node, id)
