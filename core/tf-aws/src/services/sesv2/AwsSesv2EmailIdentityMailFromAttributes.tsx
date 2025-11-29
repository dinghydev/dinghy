import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_email_identity_mail_from_attributes

export const InputSchema = z.object({
  email_identity: resolvableValue(z.string()),
  behavior_on_mx_failure: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  mail_from_domain: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSesv2EmailIdentityMailFromAttributes(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_email_identity_mail_from_attributes'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2EmailIdentityMailFromAttributess = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsSesv2EmailIdentityMailFromAttributes, node, id)
