import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesv2EmailIdentityMailFromAttributes } from './AwsSesv2EmailIdentityMailFromAttributes.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sesv2_email_identity_mail_from_attributes

export const InputSchema = z.object({
  email_identity: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  behavior_on_mx_failure: z.string().optional(),
  mail_from_domain: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSesv2EmailIdentityMailFromAttributes(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSesv2EmailIdentityMailFromAttributes
      _type='aws_sesv2_email_identity_mail_from_attributes'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesv2EmailIdentityMailFromAttributess = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSesv2EmailIdentityMailFromAttributes,
    node,
    id,
  )
